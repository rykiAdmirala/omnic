"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_1 = require("../items");
var Items = (function () {
    function Items() {
        this.isSelectorVisible = false;
        this.colors = ['orange', 'blue', 'red', 'yellow', 'tile', 'gray'];
    }
    Items.prototype.updateStorage = function () {
        localStorage.setItem('empeekItems', JSON.stringify(this.items));
    };
    Items.prototype.ngOnInit = function () {
        if (localStorage.getItem('empeekItems')) {
            this.items = JSON.parse(localStorage.getItem('empeekItems'));
        }
        else {
            this.items = items_1.ITEMS;
            this.updateStorage();
        }
        // Making first item active after page loads, if there are any items in store
        if (this.items.length > 0)
            this.makeItemActive(0);
    };
    Items.prototype.onItemCreated = function (newItem) {
        this.items.push(newItem);
        this.updateStorage();
    };
    Items.prototype.onDeleteItem = function (index) {
        this.items.splice(index, 1);
        this.updateStorage();
        if (this.items.length === 0) {
            // If delete item last at all, reset active item
            this.activeItem = undefined;
        }
        else if (this.activeItem.index === this.items.length) {
            // If delete item last in order, make previous item active
            this.makeItemActive(index - 1);
        }
        else if (this.activeItem.index === index) {
            // If delete item, make next item active
            this.makeItemActive(index);
        }
    };
    Items.prototype.onCommentCreated = function (newComment) {
        this.items[this.activeItem.index].comments.push(newComment);
        this.updateStorage();
    };
    Items.prototype.makeItemActive = function (num) {
        this.activeItem = this.items[num];
        this.activeItem.index = num;
    };
    Items.prototype.selectItem = function (item, i) {
        this.activeItem = item;
        this.activeItem.index = i;
    };
    return Items;
}());
Items = __decorate([
    core_1.Component({
        template: "\n    <div class=\"content__panes\">\n      <div class=\"content__pane items\">\n\n        <div class=\"content__title\">Items</div>\n\n        <item-creator\n          (itemCreated)=\"onItemCreated($event)\"\n        ></item-creator>        \n      \n        <div class=\"item\"\n          *ngFor=\"let item of items; let i = index\"\n          [class.active]=\"item === activeItem\"\n          (click)=\"selectItem(item, i)\"\n        >\n          <div class=\"item__wrapper\">\n            <div class=\"item__text\">{{ item.title }}</div>\n            <div class=\"item__comments-count\">{{ item.comments.length }}</div>\n            <div class=\"item__delete\" (click)=\"onDeleteItem(i)\">Delete</div>\n          </div>\n        </div>\n\n      </div>\n\n      <div\n        class=\"content__pane comments\"\n        *ngIf=\"activeItem\"\n      >\n        <div class=\"content__title\">Comments #{{ activeItem.index + 1 }}</div>\n\n        <div class=\"comment\"\n          *ngFor=\"let comment of activeItem.comments\"\n        >\n          <div class=\"comment__author color--{{ comment.color }}\"></div>\n          <div class=\"comment__text\">{{ comment.text }}</div>\n        </div>\n\n        <comment-creator\n          [colors]=\"colors\"\n          (commentCreated)=\"onCommentCreated($event)\"\n        ></comment-creator>\n        \n      </div>\n    </div>\n  "
    })
], Items);
exports.Items = Items;
