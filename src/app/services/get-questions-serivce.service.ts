import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsSerivceService {


  constructor(private httpClient:HttpClient) {
    const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
      })
    };
  }

  get_questions(questions:number){
    let URL = `https://calm-woodland-44552.herokuapp.com/getQuestions/${ questions }`;
    console.log(URL);
    this.httpClient.get(URL).subscribe((res) =>{
      console.log(res);
    });
  }

}
