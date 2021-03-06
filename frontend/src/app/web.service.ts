import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:63145/api/';

    private messageStore = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private sb: MatSnackBar) {
        var user = "";
        this.getMessages(user);
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        var response = this.http.get(this.BASE_URL + '/messages' + user).subscribe(
                response => {this.messageStore = response.json();
                this.messageSubject.next(this.messageStore)
            },
                error => {this.handleError("Unable to get messages!")
            }
        );
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json()); 
            this.messageSubject.next(this.messageStore);              
        } catch (error) {
            this.handleError("Unable to post message!");
        }
    }

    private handleError(error) {
        console.log(error);
        this.sb.open(error, 'close', {duration: 3000});
    }
}