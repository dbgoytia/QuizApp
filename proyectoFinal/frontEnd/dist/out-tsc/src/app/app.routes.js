import { RouterModule } from '@angular/router';
// Main applications:
import { InputformComponent } from './components/inputform/inputform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { EntrypointComponent } from './components/entrypoint/entrypoint.component';
import { EndComponent } from './components/end/end.component';
var APP_ROUTES = [
    { path: 'entrypoint', component: EntrypointComponent },
    { path: 'principal', component: InputformComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'scoreboard', component: ScoreBoardComponent },
    { path: 'end', component: EndComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'entrypoint' }
];
export var APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map