import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <p>{{ childMessage }}</p>
    <p>
      child works!
    </p>
  `
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;

  constructor() {}

  ngOnInit() {}
}
