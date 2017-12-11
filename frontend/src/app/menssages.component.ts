import { Component } from '@angular/core';

@Component({
  selector: 'messages',
  template: 'This is the Messages Component <div *ngFor="let message of messages">{{message.text}} by {{message.owner}}</div>'
})
export class MessagesComponent {
    messages = [
        {
            text: 'Some text',
            owner: 'Marco'
        },
        {
            text: 'Other text',
            owner: 'Sofia'
        }
    ];
}
