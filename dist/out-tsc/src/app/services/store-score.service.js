import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var StoreScoreService = /** @class */ (function () {
    function StoreScoreService() {
        this.messageSource = new BehaviorSubject([]);
        this.currentMessage = this.messageSource.asObservable();
    }
    StoreScoreService.prototype.changeMessage = function (data) {
        this.messageSource.next(data);
    };
    StoreScoreService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StoreScoreService);
    return StoreScoreService;
}());
export { StoreScoreService };
//# sourceMappingURL=store-score.service.js.map