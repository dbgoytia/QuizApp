import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
var EntrypointComponent = /** @class */ (function () {
    function EntrypointComponent(router) {
        this.router = router;
    }
    EntrypointComponent.prototype.ngOnInit = function () {
    };
    EntrypointComponent.prototype.goto = function (pagename) {
        console.log('Moving to page: ' + pagename);
        this.router.navigate([pagename]);
    };
    EntrypointComponent.prototype.documentClick = function (event) {
        // your click logic
        console.log("Start!");
        this.goto('principal');
    };
    tslib_1.__decorate([
        HostListener('document:click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [MouseEvent]),
        tslib_1.__metadata("design:returntype", void 0)
    ], EntrypointComponent.prototype, "documentClick", null);
    EntrypointComponent = tslib_1.__decorate([
        Component({
            selector: 'app-entrypoint',
            templateUrl: './entrypoint.component.html',
            styleUrls: ['./entrypoint.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EntrypointComponent);
    return EntrypointComponent;
}());
export { EntrypointComponent };
//# sourceMappingURL=entrypoint.component.js.map