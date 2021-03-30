import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFeedback } from '../model/userFeedback';
import { AppCookieService } from './appCookie.service';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:4200/api/";

  constructor(private http: HttpClient, private appCookie: AppCookieService) {}

  addFeedback(userFeedback: UserFeedback): Observable<any> {
    const headers = { 'content-type': 'application/json',
                      'Authorization': `Bearer ${this.appCookie.get("user")}`,
    }  

    const body=JSON.stringify(userFeedback);
    return this.http.post(this.baseURL + 'feedbacks', body,{'headers':headers})
  }
}