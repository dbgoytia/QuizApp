import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { AppGlobal } from '../../app.global';
import { DataService } from '../../services/data.service';
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(globals, data) {
        this.globals = globals;
        this.data = data;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log("Accessing datasource in rxjs");
        console.log(this.viewMessage());
    };
    QuestionsComponent.prototype.viewMessage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Waiting for response");
                        return [4 /*yield*/, this.delay(9000)];
                    case 1:
                        _a.sent();
                        console.log("View message: ");
                        console.log(this.message);
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionsComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionsComponent.prototype, "questions", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], QuestionsComponent.prototype, "parent", void 0);
    QuestionsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-questions',
            templateUrl: './questions.component.html',
            styleUrls: ['./questions.component.css'],
            providers: [
                AppGlobal
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [AppGlobal,
            DataService])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
export { QuestionsComponent };
//# sourceMappingURL=questions.component.js.map