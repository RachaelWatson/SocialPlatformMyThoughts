import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { SocialComponent } from './social-post/social.component';
import { PostComponent } from './social-post/post/post.component';
import { PostFormComponent } from './social-post/post-form/post-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule, 
    FormsModule
  ],
  entryComponents: [
    PostFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
