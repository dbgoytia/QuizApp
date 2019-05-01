import { RouterModule, Routes } from '@angular/router';

// Main applications:
import { InputformComponent } from './components/inputform/inputform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { EntrypointComponent } from './components/entrypoint/entrypoint.component';
import { EndComponent } from './components/end/end.component';

const APP_ROUTES: Routes = [

  { path: 'entrypoint', component: EntrypointComponent},
  { path: 'principal', component: InputformComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'scoreboard', component: ScoreBoardComponent },
  { path: 'end', component: EndComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'entrypoint' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
