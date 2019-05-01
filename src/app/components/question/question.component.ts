import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonPipePipe } from '../../pipes/json-pipe.pipe';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CheckAnswersService } from '../../services/check-answers.service';
import { Router } from '@angular/router';


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

  constructor(
    private data: DataService,
    private checkAnswers: CheckAnswersService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    console.log("Current message: ");
    console.log(this.message);
    console.log("Posible answers: ");
    console.log(this.message[this.numero].posibleAnswer);
    this.posibleAnswers = this.message[this.numero].posibleAnswer;
    const formControls = this.posibleAnswers.map(control => new FormControl(false));

    this.answers = this.fb.group({
      posibleAnswers: new FormArray(formControls)
    });

    this.total_questions = this.message.length;
    console.log(this.total_questions);
  }

  nextQuestion(){
    if(this.numero + 1  < this.total_questions){
      this.numero += 1;
      console.log(this.numero);
      console.log(this.total_questions);
      this.posibleAnswers = this.message[this.numero].posibleAnswer;
    }else {
      console.log("ya es toda wey!");
      this.goto('end');
    }
  }

  submit(){
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
          this.graded_answers = JSON.stringify(res.gradedAnswers);
          this.correct_answers = JSON.stringify(res.correctAnswers);
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
