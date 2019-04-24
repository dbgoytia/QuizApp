import { Component, OnInit } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  questions:number = 0;

  constructor(private getQuestionsSerivceService:GetQuestionsSerivceService) { }

  ngOnInit() { }

  public getQuestions():void{
    console.log((document.getElementById('username') as HTMLInputElement).value);
    console.log('Questions requested (questions) = ' + this.questions);
    this.getQuestionsSerivceService.get_questions(this.questions);
  }

  questionNumber(event:any){
    console.log('Value changed > number of questions:');
    console.log(event.value);
    this.questions = event.value;
  }

}
