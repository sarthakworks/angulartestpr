import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //for ng model and forms
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { DatabindingsComponent } from "./databindings/databindings.component";
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";
import { MypipePipe } from "./mypipe.pipe";
import { RoutingComponent } from "./routing/routing.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { AuthService } from './auth.gaurd';
import { UserloginService } from './services/userlogin.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

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
    ChildComponent,
    ParentComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, UserloginService]
})
export class AppModule {
  constructor() {
    console.log("AppModule loaded!!");
  }
}
