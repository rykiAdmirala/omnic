"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var index_1 = require("./app/index");
var index_2 = require("./app/containers/index");
var index_3 = require("./app/services/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.App,
            index_2.Charts,
            index_2.ChartDetails,
            index_2.ChartAddEdit,
            index_1.KeysPipe
        ],
        imports: [forms_1.FormsModule, platform_browser_1.BrowserModule, http_1.HttpModule, index_1.routes],
        providers: [index_3.ApiService, index_3.ChartsService],
        bootstrap: [index_1.App]
    })
], AppModule);
exports.AppModule = AppModule;
;
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
