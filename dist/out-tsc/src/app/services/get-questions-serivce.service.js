import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var GetQuestionsSerivceService = /** @class */ (function () {
    function GetQuestionsSerivceService(httpClient) {
        this.httpClient = httpClient;
        var httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    GetQuestionsSerivceService.prototype.get_questions = function (questions) {
        var URL = "https://calm-woodland-44552.herokuapp.com/getQuestions/" + questions;
        console.log(URL);
        this.httpClient.get(URL).subscribe(function (res) {
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