import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(data, fb) {
        this.data = data;
        this.fb = fb;
        this.numero = 0;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log("Current message: ");
        console.log(this.message);
        console.log("Posible answers: ");
        console.log(this.message[this.numero].posibleAnswer);
        this.posibleAnswers = this.message[this.numero].posibleAnswer;
        var formControls = this.posibleAnswers.map(function (control) { return new FormControl(false); });
        this.answers = this.fb.group({
            posibleAnswers: new FormArray(formControls)
        });
    };
    QuestionComponent.prototype.nextQuestion = function () {
        this.numero += 1;
    };
    QuestionComponent.prototype.submit = function () {
        var _this = this;
        var selectedAnswers = this.answers.value.posibleAnswers
            .map(function (checked, index) { return checked ? _this.posibleAnswers[index] : null; })
            .filter(function (value) { return value !== null; });
        console.log("Selected Answers");
        console.log(selectedAnswers);
    };
    QuestionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-question',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService,
            FormBuilder])
    ], QuestionComponent);
    return QuestionComponent;
}());
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map