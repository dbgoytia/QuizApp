import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var JsonPipePipe = /** @class */ (function () {
    function JsonPipePipe() {
    }
    JsonPipePipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    JsonPipePipe = tslib_1.__decorate([
        Pipe({
            name: 'jsonPipe'
        })
    ], JsonPipePipe);
    return JsonPipePipe;
}());
export { JsonPipePipe };
//# sourceMappingURL=json-pipe.pipe.js.map