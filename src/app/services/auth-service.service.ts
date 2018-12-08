import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase'
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  public loggedData: Subject<any>;


  constructor(public aAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.loggedData = new Subject();
    this.user = aAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        const userData = {
          'emailVerified': this.userDetails['emailVerified'],
          'displayName': this.userDetails['displayName'],
          'email': this.userDetails['email'],
          'phoneNumber': this.userDetails['phoneNumber'],
          'photoURL': this.userDetails['photoURL']
        }
        this.loggedData.next(userData)
        console.log(this.userDetails);
      }
      else {
        this.userDetails = null;
      }
    });
  }

  login() {
    return new Promise((res, rej) => {
      if (this.userDetails) {
        const user = {
          'emailVerified': this.userDetails['emailVerified'],
          'displayName': this.userDetails['displayName'],
          'email': this.userDetails['email'],
          'phoneNumber': this.userDetails['phoneNumber'],
          'photoURL': this.userDetails['photoURL']
        }
        res(user)
      } else {
        this.aAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(response => {
          const user ={
            'emailVerified': response['emailVerified'],
            'displayName': response['displayName'],
            'email': response['email'],
            'phoneNumber': response['phoneNumber'],
            'photoURL': response['photoURL']
          }
          localStorage.setItem('isLogin', res['emailVerified'])
          res(user)
        })
      }
    })
  }

  logOut() {
  const d =  this.aAuth.auth.signOut().then(res => {
      console.log('--------logout-----', res)
      this.loggedData.next(null)
    });
    console.log('dhdfhdf', d)
  }
}
