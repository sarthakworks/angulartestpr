import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `
    <app-child
      [childMessage]="parentMessage"
      (messageEvent)="receiveMessage($event)"
    ></app-child>
    {{ message }}
  `
})
export class ParentComponent implements OnInit {
  parentMessage = "message from parent";
  message: string;

  receiveMessage($event) {
    this.message = $event;
  }

  ngOnInit() {}
}
