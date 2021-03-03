import { Injectable } from "@angular/core";

@Injectable()
export class UserloginService {
  constructor() {}
  login(us, pwd) {
    if (us == "sarthak@gmail.com" && pwd == 1234) {
      localStorage.setItem("loggedin", "true");
      return true;
    }
    return false;
  }
}
