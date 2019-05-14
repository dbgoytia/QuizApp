import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreScoreService {

  private messageSource = new BehaviorSubject<any>([]);
  currentMessage = this.messageSource.asObservable();

  private totalQuestionsSource = new BehaviorSubject<any>([]);
  totalQuestions = this.totalQuestionsSource.asObservable();

  constructor() {  }

  changeMessage(data: any){
    this.messageSource.next(data);
  }

  changeTotalQuestions(data: any){
    this.totalQuestionsSource.next(data);
  }

}
