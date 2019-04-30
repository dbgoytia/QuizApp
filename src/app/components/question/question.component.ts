import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonPipePipe } from '../../pipes/json-pipe.pipe';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';


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

  constructor(
    private data: DataService,
    private fb: FormBuilder
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

  }

  nextQuestion(){
    this.numero += 1;
  }

  submit(){
    const selectedAnswers = this.answers.value.posibleAnswers
    .map((checked, index) => checked ? this.posibleAnswers[index] : null)
    .filter(value => value !== null );
    console.log("Selected Answers");
    console.log(selectedAnswers);
  }



}
