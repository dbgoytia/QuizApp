import { Component, OnInit } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  numberOfQuestions:number = 0;
  questions:any;

  constructor(
    private getQuestionsSerivceService:GetQuestionsSerivceService,
    private router: Router) { }

  ngOnInit() { }

  public getQuestions() : any{
    console.log((document.getElementById('username') as HTMLInputElement).value);
    console.log('Questions requested (questions) = ' + this.numberOfQuestions);
    new Promise ((resolve, reject) => {
      let _res = this.getQuestionsSerivceService.get_questions(this.numberOfQuestions)
      .then(
        res => {
          // Success
          console.log("Questions promise return value:");
          console.log(res);
          this.questions = res;
          console.log("Value in questions variable (in memory result)");
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

  goto(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }


}
