import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[CustomAttrDir]"
})
export class CustomDirective implements OnInit {
  @Input() colorA = "blue"; // default color if user doesn't give in property
  @Input() colorB = "yellow";
  @HostBinding("style.backgroundColor") bgcolor: string = this.colorA;
  constructor(private er: ElementRef, private renderer: Renderer2) {
    // this.er.nativeElement.style.backgroundColor = "green"; // better to use in ngOnInit
  }

  ngOnInit() {
    this.er.nativeElement.style.backgroundColor = "green"; // can give error in service worker
    this.renderer.setStyle(this.er.nativeElement, "border", "3px solid red"); //using renderer is better as Dom is not required
  }

  @HostListener("mouseenter") xyzMethod(e: Event) {
    // this.renderer.setStyle(this.er.nativeElement, "background-color", "red");
    // this.bgcolor = 'red';
    this.bgcolor = this.colorB; // used for custom color by user
  }
  @HostListener("mouseleave") abcMethod(e: Event) {
    // this.renderer.setStyle(this.er.nativeElement, "background-color", "green");
    this.bgcolor = this.colorA;
  }
}
