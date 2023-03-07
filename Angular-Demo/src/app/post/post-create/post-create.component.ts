import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  printPost = "NO CONTENT";

  AddText(myMessage: HTMLTextAreaElement){
    this.printPost = myMessage.value;
  }
}
