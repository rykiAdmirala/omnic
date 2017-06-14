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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    ApiService.prototype.getJson = function (resp) {
        return resp.json();
    };
    ApiService.prototype.checkForError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ApiService.prototype.get = function (path) {
        return this.http.get("" + path, { headers: this.headers })
            .map(this.getJson)
            .catch(this.checkForError);
    };
    ApiService.prototype.post = function (path, body) {
        return this.http.post("" + path, JSON.stringify(body), { headers: this.headers })
            .map(this.getJson)
            .catch(this.checkForError);
    };
    ApiService.prototype.put = function (path, body) {
        return this.http.put("" + path, JSON.stringify(body), { headers: this.headers })
            .map(this.getJson)
            .catch(this.checkForError);
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + path, { headers: this.headers })
            .map(this.getJson)
            .catch(this.checkForError);
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
