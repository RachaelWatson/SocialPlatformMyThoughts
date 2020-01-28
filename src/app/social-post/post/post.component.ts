import { Component, OnInit, Output, Input , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  constructor() { }

  @Input() title: string;
  @Input() thought: string;


  @Output() deleted = new EventEmitter();

  deletePost() {
    this.deleted.emit();
  }
}
