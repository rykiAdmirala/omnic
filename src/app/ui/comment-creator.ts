import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Comment } from '../models/index';

@Component({
  selector: 'comment-creator',
  templateUrl: 'assets/templates/ui/comment-creator.html',
  styleUrls: ['assets/css/ui/comment-creator.css']
})
export class CommentCreator {
  isSelectorVisible: boolean = false;
  comment: Comment = new Comment();
  @Output() commentCreated = new EventEmitter();
  @Input() colors;

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  selectColor(color) {
    this.comment.color = color;
    this.showSelector(false);
  }

  onSubmit() {
    this.commentCreated.emit(this.comment);
    this.comment = new Comment();
  }
}