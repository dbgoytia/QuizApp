import { Component, OnInit } from '@angular/core';
import { PlayersNameService } from '../../services/players-name.service';
import { StoreScoreService } from '../../services/store-score.service';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  players_name: any;
  score: any;
  totalQuestions: any;
  totalPossibleScore: any;

  constructor(
    private players_name_service: PlayersNameService,
    private storeScore: StoreScoreService,
    private questionsService: GetQuestionsSerivceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateName();
    this.updateScore();
    this.updateTotalQuestions();
    // POst resutls somewhere in here
  }

  updateName(){
    this.players_name_service.currentMessage.subscribe(message => {
      console.log("Player's name: " + message);
      this.players_name = message;
    });
  }


  updateScore(){
    this.storeScore.currentMessage.subscribe(message => {
      console.log("Score obtained: " + message);
      this.score = message;
    });
  }

  updateTotalQuestions(){
    this.storeScore.totalQuestions.subscribe(message => {
      console.log("Total questions: " + message);
      this.totalQuestions = message;
      this.totalPossibleScore = this.totalQuestions * 10;
    });
  }

  goto(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }

  sendSMS(){
    console.log("Send SMS button clicked ");
  }

  storeScores(){
    console.log("Save and quit button clicked");
  }

}
