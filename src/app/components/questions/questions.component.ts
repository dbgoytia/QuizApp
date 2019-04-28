import { Component, OnInit, Input } from '@angular/core';
import { AppGlobal } from '../../app.global';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [
    AppGlobal
  ]
})
export class QuestionsComponent implements OnInit {

  @Input() questions: any;
  @Input() parent: string;

  message: any;

  constructor(
    private globals: AppGlobal,
    private data: DataService
  ) { }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message);
    console.log("Accessing datasource in rxjs");

    console.log(this.viewMessage());

  }


  async viewMessage(){
    console.log("Waiting for response")
    await this.delay(9000);
    console.log("View message: ")
    console.log(this.message);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }



}
