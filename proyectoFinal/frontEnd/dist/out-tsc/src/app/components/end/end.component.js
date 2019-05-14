import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PlayersNameService } from '../../services/players-name.service';
import { StoreScoreService } from '../../services/store-score.service';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
import { Router } from '@angular/router';
import { PostScoreService } from '../../services/post-score.service';
import { SendSmsService } from '../../services/send-sms.service';
var EndComponent = /** @class */ (function () {
    function EndComponent(players_name_service, storeScore, questionsService, router, insertScore, sendMessage) {
        this.players_name_service = players_name_service;
        this.storeScore = storeScore;
        this.questionsService = questionsService;
        this.router = router;
        this.insertScore = insertScore;
        this.sendMessage = sendMessage;
    }
    EndComponent.prototype.ngOnInit = function () {
        this.updateName();
        this.updateScore();
        this.updateTotalQuestions();
        // POst resutls somewhere in here
    };
    EndComponent.prototype.updateName = function () {
        var _this = this;
        this.players_name_service.currentMessage.subscribe(function (message) {
            console.log("Player's name: " + message);
            _this.players_name = message;
        });
    };
    EndComponent.prototype.updateScore = function () {
        var _this = this;
        this.storeScore.currentMessage.subscribe(function (message) {
            console.log("Score obtained: " + message);
            _this.score = message;
        });
    };
    EndComponent.prototype.updateTotalQuestions = function () {
        var _this = this;
        this.storeScore.totalQuestions.subscribe(function (message) {
            console.log("Total questions: " + message);
            _this.totalQuestions = message;
            _this.totalPossibleScore = _this.totalQuestions * 10;
        });
    };
    EndComponent.prototype.goto = function (pagename) {
        console.log('Moving to page: ' + pagename);
        this.router.navigate([pagename]);
    };
    EndComponent.prototype.sendSMS = function () {
        var _this = this;
        console.log("Send SMS button clicked ");
        this.userNumber = "5521178096";
        var payload = {
            tel: this.userNumber,
            score: this.score
        };
        new Promise(function (resolve, reject) {
            var res = _this.sendMessage.send_sms(JSON.stringify(payload))
                .then(function (res) {
                console.log("Success SMS sent");
                console.log(res);
            }, function (msg) {
                reject(msg);
            });
        });
    };
    EndComponent.prototype.storeScores = function () {
        var _this = this;
        console.log("Save and quit button clicked");
        var payload = {
            initials: this.players_name,
            questions: this.totalQuestions,
            score: this.score
        };
        new Promise(function (resolve, reject) {
            var res = _this.insertScore.insert_score(JSON.stringify(payload))
                .then(function (res) {
                console.log("Success Score Insertion in Database");
                console.log(res);
            }, function (msg) {
                reject(msg);
            });
        });
    };
    EndComponent = tslib_1.__decorate([
        Component({
            selector: 'app-end',
            templateUrl: './end.component.html',
            styleUrls: ['./end.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PlayersNameService,
            StoreScoreService,
            GetQuestionsSerivceService,
            Router,
            PostScoreService,
            SendSmsService])
    ], EndComponent);
    return EndComponent;
}());
export { EndComponent };
//# sourceMappingURL=end.component.js.map