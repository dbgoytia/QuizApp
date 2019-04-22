import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { InputformComponent } from './components/inputform/inputform.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { GetQuestionsSerivceService } from './services/get-questions-serivce.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                InputformComponent,
                QuestionnaireComponent
            ],
            imports: [
                MatSelectModule,
                MatSliderModule,
                BrowserModule,
                BrowserAnimationsModule,
                APP_ROUTING,
                HttpClientModule
            ],
            providers: [
                GetQuestionsSerivceService,
                { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map