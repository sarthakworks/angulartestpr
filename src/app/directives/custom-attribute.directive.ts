import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[CustomAttrDir]"
})
export class CustomDirective implements OnInit {
  constructor(private er: ElementRef, private renderer: Renderer2) {
    // this.er.nativeElement.style.backgroundColor = "green"; // better to use in ngOnInit
  }

  ngOnInit() {
    this.er.nativeElement.style.backgroundColor = "green"; // can give error in service worker
    this.renderer.setStyle(this.er.nativeElement, "border", "3px solid red"); //using renderer is better as Dom is not required
  }
}
