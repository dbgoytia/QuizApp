import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
var InputformComponent = /** @class */ (function () {
    function InputformComponent(getQuestionsSerivceService) {
        this.getQuestionsSerivceService = getQuestionsSerivceService;
    }
    InputformComponent.prototype.ngOnInit = function () { };
    InputformComponent.prototype.getQuestions = function () {
        this.getQuestionsSerivceService.get_questions();
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