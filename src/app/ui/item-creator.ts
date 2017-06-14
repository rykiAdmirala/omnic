import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/index';

@Component({
  selector: 'item-creator',
  templateUrl: 'assets/templates/ui/item-creator.html',
  styleUrls: ['assets/css/ui/item-creator.css']
})
export class ItemCreator {
  item: Item = new Item();
  @Output() itemCreated = new EventEmitter();
  
  onSubmit() {
    this.itemCreated.emit(this.item);
    this.item = new Item();
  }

}