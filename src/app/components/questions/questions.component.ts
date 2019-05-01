import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonPipePipe } from '../../pipes/json-pipe.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})

export class QuestionsComponent implements OnInit {

  message: any;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message);
    console.log(this.loading());

  }


  async loading(){
    await this.delay(3000);
    console.log("Loading...");
    this.goto('question');
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  goto(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }

}
