import { RouterModule } from '@angular/router';
// Main applications:
import { InputformComponent } from './components/inputform/inputform.component';
var APP_ROUTES = [
    { path: 'prinicpal', component: InputformComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
export var APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map