import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CheckAnswersService } from '../../services/check-answers.service';
import { Router } from '@angular/router';
import { StoreScoreService } from '../../services/store-score.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  message: any;
  numero: number = 0;
  posibleAnswers: any;
  answers: FormGroup;
  total_questions: number;
  graded_answers: any;
  correct_answers: any;
  question: any;
  score: number = 0;
  correct_answer: any;

  constructor(
    private data: DataService,
    private checkAnswers: CheckAnswersService,
    private fb: FormBuilder,
    private router: Router,
    private storeScore: StoreScoreService
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    console.log("Current message: ");
    console.log(this.message);
    console.log("Posible answers: ");
    console.log(this.message[this.numero].posibleAnswer);
    this.posibleAnswers = this.message[this.numero].posibleAnswer;
    let formControls = this.posibleAnswers.map(control => new FormControl(false));

    this.answers = this.fb.group({
      posibleAnswers: new FormArray(formControls)
    });

    this.total_questions = this.message.length;
    console.log(this.total_questions);

    this.storeScore.changeTotalQuestions(this.total_questions);
  }

  nextQuestion(){
    if(this.numero + 1  < this.total_questions){
      (<HTMLInputElement> document.getElementById('checkButton')).disabled = false;
      (<HTMLInputElement> document.getElementById('nextQuestionButton')).disabled = true;
      this.numero += 1;
      console.log(this.numero);
      console.log(this.total_questions);
      this.posibleAnswers = this.message[this.numero].posibleAnswer;
      let formControls = this.posibleAnswers.map(control => new FormControl(false));
      this.answers = this.fb.group({
        posibleAnswers: new FormArray(formControls)
      });
      document.getElementById('feedback').style.opacity = '0.5';
    }else {
      this.storeScore.changeMessage(this.score);
      this.storeScore.currentMessage.subscribe(message => {
        console.log("Score stored: " + message);
      });
      this.goto('end');
    }
  }

  makeFeedBackReappear(){
    document.getElementById('feedback').style.opacity = '1';
  }

  submit(){

    this.makeFeedBackReappear();

    (<HTMLInputElement> document.getElementById('checkButton')).disabled = true;
    (<HTMLInputElement> document.getElementById('nextQuestionButton')).disabled = false;


    const selectedAnswers = this.answers.value.posibleAnswers
    .map((checked, index) => checked ? this.posibleAnswers[index] : null)
    .filter(value => value !== null );

    console.log("Given question:");
    this.question = this.message[this.numero].question;
    console.log(this.question);

    console.log("Selected Answers:");
    console.log(selectedAnswers);

    let payload = {
      question: this.question,
      answers: selectedAnswers
    }

    console.log("Payload");
    console.log(payload);


    new Promise ((resolve, reject) =>{
      let res = this.checkAnswers.check_anwers(JSON.stringify(payload))
      .then(
        res =>{
          console.log("Graded answers response from lambda: ");
          console.log(res);
          console.log("Score: " + this.score);
          if ( res.isCorrect == true ) this.score += 10;
          console.log("Score: " + this.score);
          const answerValue = Object.values(res.gradedAnswers);
          const answerKey = Object.keys(res.gradedAnswers);
          this.graded_answers = answerKey[0];
          this.correct_answers = res.correctAnswers[0];
          console.log("Graded Answers:");
          console.log(this.graded_answers);
          console.log(this.correct_answers);
        },
        msg => {
          reject(msg)
        }
      );
    });


  }

  goto(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }


}
