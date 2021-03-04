import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <p>{{ childMessage }}</p>
    <button (click)="sendMessage()">Send Message</button>
  `
})
export class ChildComponent implements OnInit {
  message: string = "Hello from child";
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  ngOnInit() {}
}
