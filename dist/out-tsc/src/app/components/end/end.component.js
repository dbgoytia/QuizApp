import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PlayersNameService } from '../../services/players-name.service';
import { StoreScoreService } from '../../services/store-score.service';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
import { Router } from '@angular/router';
var EndComponent = /** @class */ (function () {
    function EndComponent(players_name_service, storeScore, questionsService, router) {
        this.players_name_service = players_name_service;
        this.storeScore = storeScore;
        this.questionsService = questionsService;
        this.router = router;
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
        console.log("Send SMS button clicked ");
    };
    EndComponent.prototype.storeScores = function () {
        console.log("Save and quit button clicked");
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
            Router])
    ], EndComponent);
    return EndComponent;
}());
export { EndComponent };
//# sourceMappingURL=end.component.js.map