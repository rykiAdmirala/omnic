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
var index_1 = require("../models/index");
var ItemCreator = (function () {
    function ItemCreator() {
        this.item = new index_1.Item();
        this.itemCreated = new core_1.EventEmitter();
    }
    ItemCreator.prototype.onSubmit = function () {
        this.itemCreated.emit(this.item);
        this.item = new index_1.Item();
    };
    return ItemCreator;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ItemCreator.prototype, "itemCreated", void 0);
ItemCreator = __decorate([
    core_1.Component({
        selector: 'item-creator',
        templateUrl: 'assets/templates/ui/item-creator.html',
        styleUrls: ['assets/css/ui/item-creator.css']
    })
], ItemCreator);
exports.ItemCreator = ItemCreator;
