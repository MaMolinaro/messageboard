import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:63145/api/';

    messages = [];

    constructor(private http: Http, private sb: MatSnackBar) {
        var user = "";
        this.getMessages(user);
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        var response = this.http.get(this.BASE_URL + '/messages' + user).subscribe(
            response => {this.messages = response.json()},
            error => {this.handleError("Unable to get messages!")}
        );
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());                
        } catch (error) {
            this.handleError("Unable to post message!");
        }
    }

    private handleError(error) {
        console.log(error);
        this.sb.open(error, 'close', {duration: 3000});
    }
}