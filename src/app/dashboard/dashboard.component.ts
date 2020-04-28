import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
declare var require: any;

const data: any = require("./data.json");

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  data;
  constructor(public apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getBlog().subscribe((response) => {
      this.data = response;
      console.log(response);
    });
  }

  // Barchart
  barChart1: Chart = {
    type: "Bar",
    data: {
      labels: ["Post", "categories", "Page", "Media", "Block", "Them"],
      series: [
        [9, 4, 11, 7, 10, 12],
        [3, 2, 9, 5, 8, 10],
      ],
    },
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false,
        offset: 20,
      },
      axisY: {
        showGrid: true,
        offset: 40,
      },
      height: 360,
    },

    responsiveOptions: [
      [
        "screen and (min-width: 640px)",
        {
          axisX: {
            labelInterpolationFnc: function (
              value: number,
              index: number
            ): string {
              return index % 1 === 0 ? `${value}` : null;
            },
          },
        },
      ],
    ],
  };

  // This is for the donute chart
  // donuteChart1: Chart = {
  //   type: "Pie",
  //   data: data["Pie"],
  //   options: {
  //     donut: true,
  //     height: 260,
  //     showLabel: false,
  //     donutWidth: 20,
  //   },
  // };
}
