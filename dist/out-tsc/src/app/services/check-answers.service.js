import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var CheckAnswersService = /** @class */ (function () {
    function CheckAnswersService(httpClient) {
        this.httpClient = httpClient;
        var httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    CheckAnswersService.prototype.check_anwers = function (params) {
        var _this = this;
        console.log("Check answers: " + params);
        console.log(typeof params);
        //let obj = '{"question":"Which of the following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?", "answers":["Anticipate needs","Let them say it once", "Provide template"]}'
        var URL = "https://calm-woodland-44552.herokuapp.com/checkAnswers";
        var promise = new Promise(function (resolve, reject) {
            _this.httpClient.post(URL, params).toPromise().
                then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CheckAnswersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CheckAnswersService);
    return CheckAnswersService;
}());
export { CheckAnswersService };
//# sourceMappingURL=check-answers.service.js.map