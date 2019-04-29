import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(data) {
        this.data = data;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log("Current message: ");
        console.log(this.message);
    };
    QuestionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-question',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], QuestionComponent);
    return QuestionComponent;
}());
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map