import { Component, OnInit } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  numberOfQuestions:number = 0;
  questions:any;

  constructor(private getQuestionsSerivceService:GetQuestionsSerivceService) { }

  ngOnInit() { }

  public getQuestions() : any{
    console.log((document.getElementById('username') as HTMLInputElement).value);
    console.log('Questions requested (questions) = ' + this.numberOfQuestions);

    new Promise ((resolve, reject) => {
      let _res = this.getQuestionsSerivceService.get_questions(this.numberOfQuestions)
      .then(
        res => {
          // Success
          console.log("Questions promise:");
          console.log(res);
          this.questions = res;
          console.log("Test2");
          console.log(this.questions);

        },
        msg => {
          // Error
          reject(msg)
        }
      );
    });
  }

  questionNumber(event:any){
    console.log('Value changed > number of questions:');
    console.log(event.value);
    this.numberOfQuestions = event.value;
  }

}
