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
      gender: "male"
    },
    {
      name: "rahul",
      id: 2,
      gender: "female"
    },
    {
      name: "ram",
      id: 3,
      gender: "male"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
