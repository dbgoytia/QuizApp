import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { InputformComponent } from './inputform/inputform.component';

@NgModule({
  declarations: [
    AppComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
