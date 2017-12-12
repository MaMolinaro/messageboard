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


@NgModule({
  declarations: [
    AppComponent, MessagesComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
