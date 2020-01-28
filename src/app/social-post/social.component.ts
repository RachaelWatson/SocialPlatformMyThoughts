import { Component, Input, Output, OnInit, } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostFormComponent } from './post-form/post-form.component';

interface Post {
  thought: string;
  title: string;
}

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements Post {
  constructor(public dialog: MatDialog) {}
  
  @Input()
  title: string;
  thought: string;

  @Input() 
  newThought: string; 
  newDescription: string; 

  openDialog(): void {

    let ref = this.dialog.open(PostFormComponent, {
      width: '500px',    
    });
    ref.afterClosed().subscribe(result => {
      this.onSubmit(result);
    });
  }


  onSubmit(post) {
   this.posts.unshift(post);
  }
  deletePost(index) {
    this.posts.splice(index, 1);
  }
 
  posts = [
{
  title: 'Work Today',
  thought: 'Gotta say, there have been better days.'
},
{
  title: 'My Feelings Are Confetti',
  thought: 'They can be colorful, but they always fall.'
},
{
  title: 'The Dreamer',
  thought: 'Our 1970 camper, the Dreamer, is almost done!'
},
{
  title: 'Class',
  thought: 'Angular scares me. There, I said it.'
},
  ];
}
