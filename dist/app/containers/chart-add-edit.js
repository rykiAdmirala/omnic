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
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/startWith");
var index_1 = require("../services/index");
var index_2 = require("../models/index");
var ChartAddEdit = (function () {
    function ChartAddEdit(route, router, chartsService) {
        this.route = route;
        this.router = router;
        this.chartsService = chartsService;
        this.isTypeChartNew = true;
        this.typeChart = new index_2.TypeChart();
    }
    ChartAddEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.genderName = params['gender'];
            if (params['type']) {
                _this.chartsService
                    .getChart(_this.genderName)
                    .subscribe(function (gender) {
                    _this.typeChart = gender.types.find(function (type) { return type.typeName.toLowerCase() === params['type']; });
                });
                _this.isTypeChartNew = false;
            }
        });
    };
    ChartAddEdit.prototype.onSaveChart = function () {
        var _this = this;
        if (this.isTypeChartNew) {
            this.chartsService
                .addTypeChart(this.genderName, this.typeChart)
                .subscribe(function (data) { return _this.navigateToParent(); }, function (error) { return alert('No REST API'); });
        }
        else {
            this.chartsService
                .updateTypeChart(this.genderName, this.typeChart)
                .subscribe(function (data) { return _this.navigateToParent(); }, function (error) { return alert('No REST API'); });
        }
    };
    ChartAddEdit.prototype.navigateToParent = function () {
        this.router.navigate(['../../' + this.genderName]);
    };
    ChartAddEdit.prototype.trackByIndex = function (index, value) {
        return index;
    };
    return ChartAddEdit;
}());
ChartAddEdit = __decorate([
    core_1.Component({
        template: "\n    <div class=\"chart-edit\">\n\n      <label class=\"chart-edit__name\">Type Chart name: <input [(ngModel)]=\"typeChart.typeName\"></label>\n    \n      <table class=\"chart-edit__table\">\n        <tr\n          *ngFor=\"let row of typeChart.chart; let rowIdx = index; trackBy: trackByIndex;\"\n        >\n          <td\n            *ngFor=\"let col of row; let colIdx = index; trackBy: trackByIndex;\"\n          >\n            <input type=\"text\" [(ngModel)]=\"typeChart.chart[rowIdx][colIdx]\">\n          </td>\n        </tr>\n      </table>\n\n\n\n      <button class=\"manage-chart manage-chart--cancel\"\n        (click)=\"navigateToParent()\"\n      >\n        Cancel\n      </button>\n\n      <button class=\"manage-chart manage-chart--save\"\n        (click)=\"onSaveChart()\"\n      >\n        Save chart\n      </button>\n    \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.ChartsService])
], ChartAddEdit);
exports.ChartAddEdit = ChartAddEdit;
