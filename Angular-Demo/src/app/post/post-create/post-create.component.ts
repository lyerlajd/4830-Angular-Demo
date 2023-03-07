import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  myMessage = "POP";

  AddText(){
    this.myMessage = "Button pushed";
  }
}
