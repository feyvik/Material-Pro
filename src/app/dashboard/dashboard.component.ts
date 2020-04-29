import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  blogData;
  page = 1;
  loading = false;
  constructor(public apiService: ApiService) {}
  ngOnInit(): void {
    this.getAllBlog();
  }
  getAllBlog() {
    this.loading = true;
    this.apiService.getBlog().subscribe((response) => {
      console.log(response);
      this.loading = false;
      this.blogData = response;
    });
  }
  combineSlug(slug, id) {
    return `${slug}-${id}`;
  }
  next() {
    this.apiService.nextUser((this.page += 1)).subscribe((data) => {
      console.log(data);
      if (data) {
        this.blogData = data;
      }
    });
  }
  previous() {
    if (this.page > 1) {
      this.apiService.previousUser((this.page -= 1)).subscribe((data) => {
        console.log(data);
        if (data) {
          this.blogData = data;
        }
      });
    }
  }
}
