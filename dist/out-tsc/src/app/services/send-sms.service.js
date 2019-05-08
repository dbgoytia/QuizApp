import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var SendSmsService = /** @class */ (function () {
    function SendSmsService(httpClient) {
        this.httpClient = httpClient;
        var httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    SendSmsService.prototype.send_sms = function (params) {
        var _this = this;
        console.log("Send SMS" + params);
        console.log(typeof params);
        //let obj = '{"tel": "5521178096", "score":"100"}'
        var URL = 'https://calm-woodland-44552.herokuapp.com/sendMessage';
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
    SendSmsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SendSmsService);
    return SendSmsService;
}());
export { SendSmsService };
//# sourceMappingURL=send-sms.service.js.map