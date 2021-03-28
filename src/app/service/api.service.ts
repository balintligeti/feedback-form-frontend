import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFeedback } from '../model/userFeedback';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://0.0.0.0:5000/";
 
  constructor(private http: HttpClient) {
  }
 /*
  getFeedbacks(): Observable<UserFeedback[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<UserFeedback[]>(this.baseURL + 'people')
  }
 */

  

  addFeedback(userFeedback: UserFeedback): Observable<any> {
    const headers = { 'content-type': 'application/json',
     'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSJ9.VzqrIt7rU5JEQzVsgk-hxGr56VphfQF9h5KnpOhyYvk`,
    }  
    const body=JSON.stringify(userFeedback);
    console.log(body, headers)
    return this.http.post(this.baseURL + 'feedbacks', body,{'headers':headers})
  }
 
}