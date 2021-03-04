import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `
    <p>
      parent works!
    </p>
  `
})
export class ParentComponent implements OnInit {
  parentMessage = "message from parent";
  constructor() {}

  ngOnInit() {}
}
