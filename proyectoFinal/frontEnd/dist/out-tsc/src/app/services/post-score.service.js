import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var PostScoreService = /** @class */ (function () {
    function PostScoreService(httpClient) {
        this.httpClient = httpClient;
        var httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    PostScoreService.prototype.insert_score = function (params) {
        var _this = this;
        console.log("Insert Score" + params);
        console.log(typeof params);
        //let obj = '{"initials":"ISAIN", "questions":111, "score":111}'
        var URL = 'https://calm-woodland-44552.herokuapp.com/insertScore';
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
    PostScoreService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostScoreService);
    return PostScoreService;
}());
export { PostScoreService };
//# sourceMappingURL=post-score.service.js.map