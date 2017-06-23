"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../services/index");
var Charts = (function () {
    function Charts(router, chartsService) {
        this.router = router;
        this.chartsService = chartsService;
    }
    Charts.prototype.ngOnInit = function () {
        var _this = this;
        this.chartsService.getCharts()
            .subscribe(function (resp) { return _this.charts = resp; });
    };
    return Charts;
}());
Charts = __decorate([
    core_1.Component({
        template: "\n    \n    <div class=\"nav-title\">Select your category</div>\n\n    <nav class=\"nav\">\n      <ul>\n        <li\n          *ngFor=\"let chart of charts\"\n        >\n          <a\n            [routerLink]=\"['/' + chart.name.toLowerCase()]\"\n            routerLinkActive=\"active\"\n          >\n            {{ chart.name }}\n          </a>\n        </li>\n        \n      </ul>\n    </nav>\n    \n    <router-outlet></router-outlet>\n\n\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.ChartsService])
], Charts);
exports.Charts = Charts;
