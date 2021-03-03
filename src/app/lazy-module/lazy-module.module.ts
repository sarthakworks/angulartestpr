import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtraLazyComponent } from "./extra-lazy/extra-lazy.component";
import { lazyRoutingModule } from "./lazy-routing.module";
@NgModule({
  imports: [CommonModule, lazyRoutingModule],
  declarations: [ExtraLazyComponent]
})
export class LazyModuleModule {
  constructor() {
    console.log("lazy loaded!!");
  }
}
