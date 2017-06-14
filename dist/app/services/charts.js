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
var index_1 = require("./index");
var ChartsService = (function () {
    function ChartsService(api) {
        this.api = api;
        this.url = '/assets/data.json';
        this.chartsPath = 'charts';
    }
    ChartsService.prototype.getCharts = function () {
        var _this = this;
        return this.api.get(this.url)
            .map(function (resp) { return resp[_this.chartsPath]; });
    };
    ChartsService.prototype.getChart = function (genderName) {
        var _this = this;
        return this.api.get(this.url)
            .map(function (resp) {
            var charts = resp[_this.chartsPath];
            return charts.find(function (gender) { return gender.name.toLowerCase() === genderName; });
        });
    };
    ChartsService.prototype.updateTypeChart = function (gender, typeChart) {
        return this.api.post(this.url + "/update", { gender: gender, typeChart: typeChart });
    };
    ChartsService.prototype.addTypeChart = function (gender, typeChart) {
        return this.api.post(this.url + "/add", { gender: gender, typeChart: typeChart });
    };
    return ChartsService;
}());
ChartsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.ApiService])
], ChartsService);
exports.ChartsService = ChartsService;
