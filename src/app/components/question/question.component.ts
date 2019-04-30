import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonPipePipe } from '../../pipes/json-pipe.pipe';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  message: any;
  numero: number = 0;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    console.log("Current message: ");
    console.log(this.message);
  }

  nextQuestion(){
    this.numero += 1;
  }

}
