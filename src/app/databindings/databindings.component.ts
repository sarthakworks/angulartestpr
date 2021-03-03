import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-databindings",
  templateUrl: "./databindings.component.html",
  styleUrls: ["./databindings.component.css"]
})
export class DatabindingsComponent implements OnInit {
  data: string = "without ng model";
  data1: string = "with ngModel";
  constructor() {}

  ngOnInit() {}
}
