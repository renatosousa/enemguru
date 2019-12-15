import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor(private http: HttpClient) { }

  public nextQuestion():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
