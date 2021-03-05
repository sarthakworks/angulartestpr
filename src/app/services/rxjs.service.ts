import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class RxjsService {
  subjectvar = new Subject();
  // getsubject() {
  //   for (let i = 0; i < 10; i++) {
  //     this.subjectvar.next(i);
  //   }
  // }
  // setsubject() {}
  constructor() {}
}
