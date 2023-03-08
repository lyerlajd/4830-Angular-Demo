import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  printPost = "NO CONTENT";
  twoWayBinding = '';

  AddText(myMessage: HTMLTextAreaElement){
    this.printPost = myMessage.value;
    this.twoWayBinding = "fuck you randy";
  }
}
