import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersNameService {

  private messageSource = new BehaviorSubject<any>([]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data: any){
    this.messageSource.next(data);
  }

}
