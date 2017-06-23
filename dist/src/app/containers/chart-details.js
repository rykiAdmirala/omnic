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
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/startWith");
var index_1 = require("../services/index");
var ChartDetails = (function () {
    function ChartDetails(route, chartsService) {
        this.route = route;
        this.chartsService = chartsService;
        this.selectedTypeStream = new Subject_1.Subject();
        this.selectedTypeName = '';
    }
    ChartDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.chartsService.getChart(params.gender); })
            .subscribe(function (selectedGender) {
            _this.chartTypes = selectedGender.types;
            _this.selectedTypeStream
                .startWith(_this.chartTypes[0])
                .map(function (type) {
                _this.selectedTypeName = type.typeName;
                _this.selectedChart = type.chart;
            })
                .subscribe();
        });
    };
    ChartDetails.prototype.isSelected = function (type) {
        return this.selectedTypeName === type.typeName;
    };
    ChartDetails.prototype.selectType = function (type) {
        this.selectedTypeStream.next(type);
    };
    return ChartDetails;
}());
ChartDetails = __decorate([
    core_1.Component({
        template: "\n    <div class=\"chart-holder\">\n      \n      <div class=\"chart-types\">\n        <div class=\"chart-type\"\n          *ngFor=\"let type of chartTypes\"\n          (click)=\"selectType(type)\"\n          [class.selected]=\"isSelected(type)\"\n        >\n          {{ type.typeName }}\n        </div>\n      </div>\n\n      <table class=\"chart\">\n        <tr class=\"chart__row\"\n          *ngFor=\"let row of selectedChart\"\n        >\n          <td class=\"chart__col\"\n            *ngFor=\"let col of row\"\n          >\n            {{ col }}\n          </td>\n        </tr>\n      </table>      \n\n\n      <a class=\"chart-type chart-type--add\"\n        [routerLink]=\"['add']\"\n      >\n        Add new SizeChart\n      </a>\n\n      <a class=\"chart-type chart-type--add\"\n        [routerLink]=\"[selectedTypeName.toLowerCase(), 'edit']\"\n      >\n        Edit this SizeChart\n      </a>\n    \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        index_1.ChartsService])
], ChartDetails);
exports.ChartDetails = ChartDetails;
