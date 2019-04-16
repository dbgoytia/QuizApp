import { RouterModule, Routes } from '@angular/router';

// Main applications:
import { InputformComponent } from './inputform/inputform.component';

const APP_ROUTES: Routes = [

  { path: 'prinicpal', component: InputformComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
