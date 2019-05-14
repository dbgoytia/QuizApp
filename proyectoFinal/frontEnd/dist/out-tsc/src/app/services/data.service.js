import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new BehaviorSubject([]);
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (data) {
        this.messageSource.next(data);
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map