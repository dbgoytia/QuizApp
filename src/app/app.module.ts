import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { InputformComponent } from './components/inputform/inputform.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GetQuestionsSerivceService } from './services/get-questions-serivce.service';
import { QuestionsComponent } from './components/questions/questions.component';
import { JsonPipePipe } from './pipes/json-pipe.pipe';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckAnswersService } from './services/check-answers.service';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { GetScoreboardService } from './services/get-scoreboard.service';
import { EntrypointComponent } from './components/entrypoint/entrypoint.component';
import { EndComponent } from './components/end/end.component';
import { PlayersNameService } from './services/players-name.service';
import { StoreScoreService } from './services/store-score.service';




@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    QuestionsComponent,
    JsonPipePipe,
    QuestionComponent,
    ScoreBoardComponent,
    EntrypointComponent,
    EndComponent
  ],
  imports: [
    MatSelectModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    GetQuestionsSerivceService,
    CheckAnswersService,
    GetScoreboardService,
    PlayersNameService,
    StoreScoreService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
