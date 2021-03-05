import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./loginTemplateDriven/login.component";
import { DatabindingsComponent } from "./databindings/databindings.component";
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ChildComponent } from "./componentInteraction/child/child.component";
import { ParentComponent } from "./componentInteraction/parent/parent.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { AuthService } from "./auth.gaurd";
export const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  // {
  //   path: "lazy",
  //   loadChildren: "app/lazy-module/lazy-module.module#LazyModuleModule"
  // },
  {
    path: "lazy",
    canActivate: [AuthService],
    loadChildren: () =>
      import("./lazy-module/lazy-module.module").then(m => m.LazyModuleModule)
  },

  {
    path: "databinding",
    canActivate: [AuthService],
    component: DatabindingsComponent
  },
  {
    path: "pipe",
    canActivate: [AuthService],
    component: PipeExampleComponent
  },
  {
    path: "reactive",
    canActivate: [AuthService],
    component: ReactiveformComponent
  },
  {
    path: "child",
    canActivate: [AuthService],
    component: ChildComponent
  },
  { path: "parent", canActivate: [AuthService], component: ParentComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
