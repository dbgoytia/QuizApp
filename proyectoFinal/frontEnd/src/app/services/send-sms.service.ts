import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendSmsService {

  constructor(private httpClient:HttpClient) {
    const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
      })
    };
  }

  send_sms(params: any): Promise<any> {
    console.log("Send SMS" + params);
    console.log(typeof params);
    //let obj = '{"tel": "5521178096", "score":"100"}'
    let URL = 'https://calm-woodland-44552.herokuapp.com/sendMessage'
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
