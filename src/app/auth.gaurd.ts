import { Injectable } from "@angular/core";
import { UserloginService } from "./services/userlogin.service";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements CanActivate {
  constructor(private routes: Router, private loginservice: UserloginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem("loggedin") != null) {
      return true;
    } else {
      this.routes.navigate(["/login"]);
      return false;
    }
  }
}
