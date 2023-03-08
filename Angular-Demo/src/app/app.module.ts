import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// self-made components
import { PostCreateComponent } from './post/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';

// materials components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  // for self-made components
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent
  ],
  // for materials components
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
