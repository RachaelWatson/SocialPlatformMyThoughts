import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';
import{MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
@Input() 
newThought: string; 
@Input() newDescription: string; 
@Output() submitted = new EventEmitter();
constructor(public dialogRef: MatDialogRef<PostFormComponent>){}
onSubmit(newThought: string, newDescription: string) {
  console.log(newThought, newDescription)
  if (newThought.length && newDescription.length !==0){
    this.dialogRef.close({title: newThought, thought: newDescription});
  } 
}

}
