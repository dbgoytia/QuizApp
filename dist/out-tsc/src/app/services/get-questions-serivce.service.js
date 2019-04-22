import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var GetQuestionsSerivceService = /** @class */ (function () {
    function GetQuestionsSerivceService(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://calm-woodland-44552.herokuapp.com/getQuestions/2';
    }
    GetQuestionsSerivceService.prototype.get_questions = function () {
        this.httpClient.get(this.URL).subscribe(function (res) {
            console.log(res);
        });
    };
    GetQuestionsSerivceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GetQuestionsSerivceService);
    return GetQuestionsSerivceService;
}());
export { GetQuestionsSerivceService };
//# sourceMappingURL=get-questions-serivce.service.js.map