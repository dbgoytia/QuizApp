import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostScoreService {

  constructor(private httpClient:HttpClient) {
    const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
      })
    };
  }

  insert_score(params: any): Promise<any> {
    console.log("Insert Score" + params);
    console.log(typeof params);
    //let obj = '{"initials":"ISAIN", "questions":111, "score":111}'
    let URL = 'https://calm-woodland-44552.herokuapp.com/insertScore'
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
