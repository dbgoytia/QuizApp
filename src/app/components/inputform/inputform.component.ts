import { Component, OnInit } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
import { Router } from '@angular/router';
import { AppGlobal } from '../../app.global';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css'],
  providers: [
    AppGlobal
  ]
})
export class InputformComponent implements OnInit {

  numberOfQuestions:number = 0;
  questions:any;

  // Example
  message: any;

  constructor(
    private getQuestionsSerivceService:GetQuestionsSerivceService,
    private router: Router,
    private globals: AppGlobal,
    private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

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
          console.log("Updating global variable for questions:");
          this.globals.questions = this.questions
          console.log("Global value: ");
          console.log(this.globals.questions);
          //this.gotoQuestions('questions', [this.questions, 'master']);
          this.newMessage(this.questions);
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

  gotoQuestions(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }

  newMessage(message: any){
    this.data.changeMessage(message);
  }


}
