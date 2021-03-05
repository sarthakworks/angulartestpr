import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
@Component({
  selector: "app-sibling1",
  templateUrl: "./sibling1.component.html",
  styleUrls: ["./sibling1.component.css"]
})
export class Sibling1Component implements OnInit {
  subjectvar = new Subject();
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.subjectvar.next(i);
    }
  }
}
