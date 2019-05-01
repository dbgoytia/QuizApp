import { Component, OnInit } from '@angular/core';
import { GetScoreboardService } from '../../services/get-scoreboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  scoreboard: any;

  constructor(
    private getScoreboardService :GetScoreboardService,
    private router: Router
  ) { }

  ngOnInit() {

    new Promise ((resolve, reject) => {
      let res = this.getScoreboardService.get_scoreboard()
      .then(
        res => {
          console.log("Answer returned from service");
          console.log(JSON.stringify(res));
          this.scoreboard = res;
        },
        msg => {
          // Error happened
          console.log(msg);
        }
      );
    });
  }

  goto(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }
}
