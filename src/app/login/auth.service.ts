import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService{
    userName: string;
    loggedIn: boolean;
    url = 'https://angularservertest.herokuapp.com/auth';
    //url = 'http://localhost:8000/auth';

    constructor(private http: Http){
        this.userName = '';
        this.loggedIn = false;
    }

    login(userInfo){
        let url = `${this.url}/login`;
        let iJson = JSON.stringify(userInfo);
        return this.http.post(url, iJson, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.text()).map(res => {
            if(res=="error" || res=="nofound"){
                this.loggedIn = false;
            }else{
                localStorage.setItem('token', res);
                this.userName = userInfo.user;
                localStorage.setItem('currentUser', this.userName);
                this.loggedIn = true;
            }
            return this.loggedIn;
        });
    }

    logout(): void{
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.userName = '';
        this.loggedIn = false;
    }

    isLoggedIn(){
         if(localStorage.getItem('token') != null){
            this.loggedIn = true;
            this.userName = localStorage.getItem('currentUser');
            return this.loggedIn;
        }else{
            this.loggedIn = false;
            return this.loggedIn;
        }
        //return this.loggedIn;
    }
}