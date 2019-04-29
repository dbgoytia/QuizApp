import { RouterModule } from '@angular/router';
// Main applications:
import { InputformComponent } from './components/inputform/inputform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
var APP_ROUTES = [
    { path: 'principal', component: InputformComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'question', component: QuestionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
export var APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map