import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase'
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
class Book {
  constructor(public title) { }
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public books: AngularFireList<Book[]>;
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  uid = this.aAuth.authState.pipe(map(authState => {
    if (!authState) {
      return null;
    } else {
      return authState.uid;
    }
  }));
  constructor(public aAuth: AngularFireAuth, db: AngularFireDatabase) {
    console.log('--dd---', )
    this.books = db.list('/messages');
    console.log('--dd--/-',db )
    // this.books.push({'a': 10});
    const newBook = new Book('man');
    this.books.push([newBook]);
    this.user = aAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  login() {
    console.log(this.userDetails);
    this.aAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {
      console.log('google ----', res)
    })
  }
  logOut() {
    this.aAuth.auth.signOut();
  }
}
