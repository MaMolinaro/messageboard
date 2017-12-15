import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
      MatButtonModule, 
      MatCardModule,
      MatInputModule,
      MatSnackBarModule,
      MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './menssages.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new.message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
