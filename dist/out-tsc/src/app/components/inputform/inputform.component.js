import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
var InputformComponent = /** @class */ (function () {
    function InputformComponent(getQuestionsSerivceService) {
        this.getQuestionsSerivceService = getQuestionsSerivceService;
        this.numberOfQuestions = 0;
    }
    InputformComponent.prototype.ngOnInit = function () { };
    InputformComponent.prototype.getQuestions = function () {
        var _this = this;
        console.log(document.getElementById('username').value);
        console.log('Questions requested (questions) = ' + this.numberOfQuestions);
        new Promise(function (resolve, reject) {
            var _res = _this.getQuestionsSerivceService.get_questions(_this.numberOfQuestions)
                .then(function (res) {
                // Success
                console.log("Questions promise return value:");
                console.log(res);
                _this.questions = res;
                console.log("Value in questions variable (in memory result)");
                console.log(_this.questions);
            }, function (msg) {
                // Error
                reject(msg);
            });
        });
    };
    InputformComponent.prototype.questionNumber = function (event) {
        console.log('Value changed > number of questions:');
        console.log(event.value);
        this.numberOfQuestions = event.value;
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