import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-routing",
  templateUrl: "./routing.component.html",
  styleUrls: ["./routing.component.css"]
})
export class RoutingComponent implements OnInit {
  constructor(private route: Router) {}
  navToLogin() {
    this.route.navigate(["/login"]);
  }
  ngOnInit() {}
}
