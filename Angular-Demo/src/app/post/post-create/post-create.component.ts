import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  printPost = '';
  myMessage = '';
  summary = '';

  AddText(){
    this.summary = this.myMessage.slice(0, 30) + "...";
    this.printPost = this.myMessage;
  }
}
