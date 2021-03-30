import { Component } from '@angular/core';
import { AppCookieService } from '../service/appCookie.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login {
  constructor( private appCookie: AppCookieService) {
  }
  login(user: string) {
    if (user == 'user1'){
      this.appCookie.set("user", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSJ9.VzqrIt7rU5JEQzVsgk-hxGr56VphfQF9h5KnpOhyYvk"); //user1
    } else{
      this.appCookie.set("user", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiJ9.dvVCAT2exyaUMeJSFZh7ck0xrUcNqmrhjcje23tPiGE"); //user2
    }
  }
}
