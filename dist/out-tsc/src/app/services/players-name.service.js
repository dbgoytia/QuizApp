import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var PlayersNameService = /** @class */ (function () {
    function PlayersNameService() {
        this.messageSource = new BehaviorSubject([]);
        this.currentMessage = this.messageSource.asObservable();
    }
    PlayersNameService.prototype.changeMessage = function (data) {
        this.messageSource.next(data);
    };
    PlayersNameService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PlayersNameService);
    return PlayersNameService;
}());
export { PlayersNameService };
//# sourceMappingURL=players-name.service.js.map