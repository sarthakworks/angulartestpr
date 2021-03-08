import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[greenBgDirective]"
})
export class CustomDirective implements OnInit {
  constructor(private er: ElementRef, private renderer: Renderer2) {
    // this.er.nativeElement.style.backgroundColor = "green"; // better to use in ngOnInit
  }

  ngOnInit() {
    // this.er.nativeElement.style.backgroundColor = "green"; // can give error in service worker
    this.renderer.setStyle(this.er.nativeElement, "background-Color", "blue"); // better as Dom is not required 
  }
}
