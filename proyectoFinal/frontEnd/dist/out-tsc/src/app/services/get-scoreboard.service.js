import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var GetScoreboardService = /** @class */ (function () {
    function GetScoreboardService(httpClient) {
        this.httpClient = httpClient;
    }
    GetScoreboardService.prototype.get_scoreboard = function () {
        var _this = this;
        console.log("Fetching scoreboard");
        var URL = "https://calm-woodland-44552.herokuapp.com/getScores";
        console.log(URL);
        var promise = new Promise(function (resolve, reject) {
            _this.httpClient.get(URL).toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    GetScoreboardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GetScoreboardService);
    return GetScoreboardService;
}());
export { GetScoreboardService };
//# sourceMappingURL=get-scoreboard.service.js.map