import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(getQuestionsSerivceService) {
        this.getQuestionsSerivceService = getQuestionsSerivceService;
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent = tslib_1.__decorate([
        Component({
            selector: 'app-questionnaire',
            templateUrl: './questionnaire.component.html',
            styleUrls: ['./questionnaire.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GetQuestionsSerivceService])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());
export { QuestionnaireComponent };
//# sourceMappingURL=questionnaire.component.js.map