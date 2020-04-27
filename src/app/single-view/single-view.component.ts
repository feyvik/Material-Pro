import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-single-view",
  templateUrl: "./single-view.component.html",
  styleUrls: ["./single-view.component.scss"],
})
export class SingleViewComponent implements OnInit {
  single;
  slug;
  sub;
  date;
  constructor(public apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.SingleBlog();
  }
  SingleBlog() {
    this.sub = this.route.params.subscribe((params) => {
      this.slug = params["slug"];
    });
    const slugURL = this.slug.split("-");
    const blogID = slugURL.pop();
    this.apiService.getUserData(blogID).subscribe((response) => {
      this.single = response;
      const date = new Date(this.single.date);
      const publishedYear = date.getFullYear();
      const publishedDate = date.getDate();
      const months = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const publishedMonth = months[date.getMonth()];
      this.date = `${publishedMonth} ${publishedDate}, ${publishedYear}`;
      console.log(this.date);
    });
  }
}
