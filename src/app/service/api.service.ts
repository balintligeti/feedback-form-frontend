import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFeedback } from '../model/userFeedback';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:4200/api/";
 

  constructor(private http: HttpClient) {
  }
 /*
  getFeedbacks(): Observable<UserFeedback[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<UserFeedback[]>(this.baseURL + 'people')
  }
 */

  test = {
    "challenge_id": "ca92d318-e0b5-4ec4-aff7-9d265d7e22bb",
    "data": {
      "user_effort": {
        "feedback": "mukodik2",
        "score": 0
      },
      "educational_value": {
        "feedback": "mukodik2",
        "score": 0
      },
      "url": "string",
      "is_support": true
    }
  }
  

  addFeedback(userFeedback: UserFeedback): Observable<any> {
    const headers = { 'content-type': 'application/json',
     'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSJ9.VzqrIt7rU5JEQzVsgk-hxGr56VphfQF9h5KnpOhyYvk`,
    }  
    const body=JSON.stringify(userFeedback);
    const body2=JSON.stringify(this.test);

    console.log(body, body2)
    return this.http.post(this.baseURL + 'feedbacks', body,{'headers':headers})
  }
}