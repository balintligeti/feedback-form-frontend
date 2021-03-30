import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFeedback } from '../model/userFeedback';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:4200/api/";

  constructor(private http: HttpClient) {}

  addFeedback(userFeedback: UserFeedback): Observable<any> {
    const headers = { 'content-type': 'application/json',
                      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSJ9.VzqrIt7rU5JEQzVsgk-hxGr56VphfQF9h5KnpOhyYvk`,
    }  

    const body=JSON.stringify(userFeedback);
    return this.http.post(this.baseURL + 'feedbacks', body,{'headers':headers})
  }
}