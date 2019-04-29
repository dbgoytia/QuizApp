import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log(this.loading());
    };
    QuestionsComponent.prototype.loading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delay(9000)];
                    case 1:
                        _a.sent();
                        console.log("Loading...");
                        this.goto('question');
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionsComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    QuestionsComponent.prototype.goto = function (pagename) {
        console.log('Moving to page: ' + pagename);
        this.router.navigate([pagename]);
    };
    QuestionsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-questions',
            templateUrl: './questions.component.html',
            styleUrls: ['./questions.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataService,
            Router])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
export { QuestionsComponent };
//# sourceMappingURL=questions.component.js.map