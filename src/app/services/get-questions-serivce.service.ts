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

  get_questions(questions:number): Promise<any> {
    console.log('Fetching ' +questions + ' questions.');
    let URL = `https://calm-woodland-44552.herokuapp.com/getQuestions/${ questions }`;
    console.log(URL);
    let promise = new Promise ((resolve, reject) => {
      this.httpClient.get(URL).toPromise()
      .then(
        res => {
          // Success code
          resolve(res);
        },
        msg => {
          // Error message
          reject(msg);
        }
      );
    });
    return promise;
  }

  postResults(entry:any){
    let URL = 'https://calm-woodland-44552.herokuapp.com/insertScore';
    return this.httpClient.post(URL, entry);
  }



}
