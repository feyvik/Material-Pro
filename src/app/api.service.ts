import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  base_path = `https://epower.ng/wp-json/wp/v2/posts?page=1&per_page=6`;
  list: any;
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  getBlog() {
    return this.http
      .get(this.base_path)
      .pipe(retry(2), catchError(this.handleError));
  }
  getSingle(blog: any[]) {
    // this.list = blog;
    console.log(blog);
    return this.http
      .get(`https://epower.ng/wp-json/wp/v2/posts/${blog}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getUserData(blogs) {
    console.log(blogs);
    return this.http
      .get(`https://epower.ng/wp-json/wp/v2/posts/${blogs}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  nextUser(page) {
    return this.http
      .get(`https://epower.ng/wp-json/wp/v2/posts?page=${page}&per_page=6`)
      .pipe(retry(2), catchError(this.handleError));
  }
  previousUser(page) {
    return this.http
      .get(`https://epower.ng/wp-json/wp/v2/posts?page=${page}&per_page=6`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
