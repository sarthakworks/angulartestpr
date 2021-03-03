import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExtraLazyComponent } from "./extra-lazy/extra-lazy.component";

export const lazyRoutes: Routes = [
  {
    path: "",
    component: ExtraLazyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(lazyRoutes)],
  exports: [RouterModule]
})
export class lazyRoutingModule {}
