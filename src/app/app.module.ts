import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //for ng model and forms
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./loginTemplateDriven/login.component";
import { DatabindingsComponent } from "./databindings/databindings.component";
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";
import { MypipePipe } from "./mypipe.pipe";
import { RoutingComponent } from "./routing/routing.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { AuthService } from "./auth.gaurd";
import { UserloginService } from "./services/userlogin.service";
import { ChildComponent } from "./componentInteraction/child/child.component";
import { ParentComponent } from "./componentInteraction/parent/parent.component";
import { RxjsService } from "./services/rxjs.service";
import { CustomDirective } from "./directives/custom-attribute.directive";
import { DirectiveExmplComponent } from "./directives/directive-exmpl/directive-exmpl.component";
import { CustomStructureDirective } from "./directives/custom-structure.directive";
import { HttpPostComponent } from './RXJS/http-post/http-post.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    DatabindingsComponent,
    PipeExampleComponent,
    MypipePipe,
    RoutingComponent,
    NotfoundComponent,
    ReactiveformComponent,
    ParentComponent,
    ChildComponent,
    CustomDirective,
    DirectiveExmplComponent,
    CustomStructureDirective,
    HttpPostComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, UserloginService, RxjsService]
})
export class AppModule {
  constructor() {
    console.log("AppModule loaded!!");
  }
}
