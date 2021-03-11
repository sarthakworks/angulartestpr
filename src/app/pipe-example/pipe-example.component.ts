import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe-example",
  templateUrl: "./pipe-example.component.html",
  styleUrls: ["./pipe-example.component.css"]
})
export class PipeExampleComponent implements OnInit {
  name: string = "sartHak banSal";
  dob = new Date(1990, 8, 2);
  salary: number = 99000;
  decimal: number = 0.124245466;
  jsondata: any = [
    {
      name: "sarthak",
      id: 1,
      gender: "male",
      started: new Date(15, 1, 2017)
    },
    {
      name: "rahul",
      id: 2,
      gender: "female",
      started: new Date(15, 1, 2018)
    },
    {
      name: "ram",
      id: 3,
      gender: "male",
      started: new Date(15, 1, 2019)
    }
  ];
  constructor() {}

  ngOnInit() {}
}
