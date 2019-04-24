import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
var InputformComponent = /** @class */ (function () {
    function InputformComponent(getQuestionsSerivceService) {
        this.getQuestionsSerivceService = getQuestionsSerivceService;
        this.questions = 0;
    }
    InputformComponent.prototype.ngOnInit = function () { };
    InputformComponent.prototype.getQuestions = function () {
        console.log(document.getElementById('username').value);
        console.log('Questions requested (questions) = ' + this.questions);
        this.getQuestionsSerivceService.get_questions(this.questions);
    };
    InputformComponent.prototype.questionNumber = function (event) {
        console.log('Value changed > number of questions:');
        console.log(event.value);
        this.questions = event.value;
    };
    InputformComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inputform',
            templateUrl: './inputform.component.html',
            styleUrls: ['./inputform.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GetQuestionsSerivceService])
    ], InputformComponent);
    return InputformComponent;
}());
export { InputformComponent };
//# sourceMappingURL=inputform.component.js.map