import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetScoreboardService } from '../../services/get-scoreboard.service';
var ScoreBoardComponent = /** @class */ (function () {
    function ScoreBoardComponent(getScoreboardService) {
        this.getScoreboardService = getScoreboardService;
    }
    ScoreBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            var res = _this.getScoreboardService.get_scoreboard()
                .then(function (res) {
                console.log("Answer returned from service");
                console.log(JSON.stringify(res));
                _this.scoreboard = res;
            }, function (msg) {
                // Error happened
                console.log(msg);
            });
        });
    };
    ScoreBoardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-score-board',
            templateUrl: './score-board.component.html',
            styleUrls: ['./score-board.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GetScoreboardService])
    ], ScoreBoardComponent);
    return ScoreBoardComponent;
}());
export { ScoreBoardComponent };
//# sourceMappingURL=score-board.component.js.map