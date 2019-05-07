import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';
import { Router } from '@angular/router';
import { AppGlobal } from '../../app.global';
import { DataService } from '../../services/data.service';
import { PlayersNameService } from '../../services/players-name.service';
var InputformComponent = /** @class */ (function () {
    function InputformComponent(getQuestionsSerivceService, router, globals, players_name_service, data) {
        this.getQuestionsSerivceService = getQuestionsSerivceService;
        this.router = router;
        this.globals = globals;
        this.players_name_service = players_name_service;
        this.data = data;
        this.numberOfQuestions = 0;
    }
    InputformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    InputformComponent.prototype.getQuestions = function () {
        var _this = this;
        console.log('Questions requested (questions) = ' + this.numberOfQuestions);
        new Promise(function (resolve, reject) {
            var _res = _this.getQuestionsSerivceService.get_questions(_this.numberOfQuestions)
                .then(function (res) {
                // Success
                console.log("Questions promise return value:");
                console.log(res);
                _this.questions = res;
                console.log("Value in questions variable (in memory result)");
                console.log(_this.questions);
                console.log("Updating global variable for questions:");
                _this.globals.questions = _this.questions;
                console.log("Global value: ");
                console.log(_this.globals.questions);
                _this.newMessage(_this.questions);
            }, function (msg) {
                // Error
                reject(msg);
            });
        });
    };
    InputformComponent.prototype.questionNumber = function (event) {
        console.log('Value changed > number of questions:');
        console.log(event.value);
        this.numberOfQuestions = event.value;
    };
    InputformComponent.prototype.gotoQuestions = function (pagename) {
        console.log('Moving to page: ' + pagename);
        this.router.navigate([pagename]);
    };
    InputformComponent.prototype.newMessage = function (message) {
        this.data.changeMessage(message);
    };
    InputformComponent.prototype.addPlayerName = function () {
        this.players_name_service.changeMessage(document.getElementById('username').value);
        this.players_name_service.currentMessage.subscribe(function (message) {
            console.log("Player name stored: " + message);
        });
    };
    InputformComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inputform',
            templateUrl: './inputform.component.html',
            styleUrls: ['./inputform.component.css'],
            providers: [
                AppGlobal
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [GetQuestionsSerivceService,
            Router,
            AppGlobal,
            PlayersNameService,
            DataService])
    ], InputformComponent);
    return InputformComponent;
}());
export { InputformComponent };
//# sourceMappingURL=inputform.component.js.map