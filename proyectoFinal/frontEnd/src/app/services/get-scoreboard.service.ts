import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetScoreboardService {

  constructor(private  httpClient:HttpClient) { }

  get_scoreboard(): Promise <any>{
    console.log("Fetching scoreboard");
    let URL = `https://calm-woodland-44552.herokuapp.com/getScores`;
    console.log(URL);
    let promise = new Promise((resolve, reject) =>{
      this.httpClient.get(URL).toPromise()
      .then(
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
