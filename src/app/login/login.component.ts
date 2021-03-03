import { Component, OnInit } from "@angular/core";
import { UserloginService } from "../services/userlogin.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  name: string = "";
  password: string = "";

  constructor(private loginService: UserloginService, private routes: Router) {}
  submit(loginForm: any) {
    this.name = loginForm.controls.email.value;
    // this.password = loginForm.controls.pwd.value;
    console.log(this.name);
    console.log(this.password);
    console.log(loginForm);
    if (this.loginService.login(this.name, this.password)) {
      this.routes.navigate(["/pipe"]);
    }
  }
  ngOnInit() {}
}
