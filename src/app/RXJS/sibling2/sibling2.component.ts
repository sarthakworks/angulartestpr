import { Component, OnInit } from "@angular/core";
import { RxjsService } from "./services/rxjs.service";
@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  constructor(private r: RxjsService) {}

  ngOnInit() {
    this.r.subjectvar.subscribe(data => {
      console.log(data);
    });
  }
}
