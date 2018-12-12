import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'
import { AngularFireMessaging } from '@angular/fire/messaging';
import * as firebase from 'firebase/app'
import { Observable, BehaviorSubject } from 'rxjs';
// import 'rxjs/add/operator/take';



@Injectable({
  providedIn: 'root'
})
export class FirebaseseService {
  item: Observable<any>;
  currentMessage;
  messaging = firebase.messaging()
  itemRef: AngularFireList<any> = null;




  constructor(public fireDb: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.currentMessage = new BehaviorSubject(null);
    this.itemRef = fireDb.list('/item');



  }

  updatetocken(token) {
    this.angularFireAuth.authState.subscribe(user => {
      if (!user) return;
      const data = {[user.uid]: token}
      this.fireDb.object('token/').update(data)
    })
  }
getPermissions(){
  this.messaging.requestPermission().then(() => {
    console.log('permission granted---->', this.messaging.getToken());
    return this.messaging.getToken();
  })
  .then(token => {
    console.log('2--->', token);
    return this.updatetocken(token)
  })
  .catch(err => {
    console.log('error obtained ==============>', err)
  })
}

getMessage(){
  this.messaging.onMessage((payload)=>{
this.currentMessage.next(payload)
  })
}
  getUsers(): AngularFireList<any> {
    console.log('df', this.itemRef)
    return this.itemRef;
  }

  insert(user) {
    console.log('ser----', user)
    this.itemRef.push({
      'name': user.name,
      'is': user.id,
      'age': user.age

    });
  }

}
