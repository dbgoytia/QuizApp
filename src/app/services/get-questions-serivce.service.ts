import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsSerivceService {

  URL = 'https://calm-woodland-44552.herokuapp.com/getQuestions/2'

  constructor(private httpClient:HttpClient) { }

  get_questions(){
    this.httpClient.get(this.URL).subscribe((res) =>{
      console.log(res);
    });
  }

}
