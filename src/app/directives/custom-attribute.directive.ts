import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appCustomDirectives]"
})
export class CustomDirective implements OnInit {
  constructor(private er: ElementRef) {
    // this.er.nativeElement.style.backgroundColor = "green"; // better to use in ngOnInit
  }

  ngOnInit() {
    this.er.nativeElement.style.backgroundColor = "green";
  }
}
