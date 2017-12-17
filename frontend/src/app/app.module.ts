import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
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
import { NavComponent } from './nav.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new.message.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

var routers = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
    }    
];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent
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
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
