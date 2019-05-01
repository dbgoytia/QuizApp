import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckAnswersService {

  constructor(private httpClient:HttpClient) {
    const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
      })
    };
  }

  check_anwers(params: any): Promise<any> {
    console.log("Check answers: " + params);
    console.log(typeof params);
    let obj = {
                "question":"Which of the following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
                "answers":["Anticipate needs",
                           "Let them say it once",
                           "Provide template"]
              }
    //let obj = '{"question":"Which of the following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?", "answers":["Anticipate needs","Let them say it once", "Provide template"]}'
    let URL = `https://calm-woodland-44552.herokuapp.com/checkAnswers`;
    let promise = new Promise ((resolve, reject) => {
      this.httpClient.post(URL, params).toPromise().
      then(
        res => {
          resolve (res);
        },
        msg => {
          reject (msg);
        }
      );
    });
    return promise;

  }

}
