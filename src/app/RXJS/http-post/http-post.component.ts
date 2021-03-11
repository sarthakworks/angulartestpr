import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-http-post",
  templateUrl: "./http-post.component.html",
  styleUrls: ["./http-post.component.css"]
})
export class HttpPostComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        "https://mimetic-core-246218-default-rtdb.firebaseio.com//posts.json",
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http
      .get(
        "https://mimetic-core-246218-default-rtdb.firebaseio.com//posts.json"
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
