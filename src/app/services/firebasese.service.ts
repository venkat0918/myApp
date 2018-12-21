import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'
import { AngularFireMessaging } from '@angular/fire/messaging';
import * as firebase from 'firebase/app'
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
    private angularFireAuth: AngularFireAuth, public http: HttpClient,
    private angularFireMessaging: AngularFireMessaging) {
    this.currentMessage = new BehaviorSubject(null);
    this.itemRef = fireDb.list('/item');



  }

  updatetocken(token) {
    this.angularFireAuth.authState.subscribe(user => {
      console.log('fun')
      if (!user) {
        console.log('if')
        return;
      } else {
        console.log('else')
        const data = { [user.uid]: token }
        this.fireDb.object('fcmTokens/').update(data)
      }

    })
  }
  getPermissions() {
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

  getMessage() {
    console.log('----1--getmessage----')
    this.messaging.onMessage((payload) => {
      console.log('------getmessage----')
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



  //sending notifications through fcm api
  sendNotification() {
    const fcmHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'key=' + 'AIzaSyBENrfTxgAwf_KF5zFhAPNIKeBnvpO3mdY' /** Auth token generated in firebase console **/
    });

    const requestBody = {
      'notification': {
        'title': 'Helpdesk',
        'body': 'Venkat',
        // 'click_action': details.route,
        // C:\Users\miracle\Desktop\Underdevelopment\myApp\src\assets\logo3.png
        'icon': './assets/logo3.png',
        'badge': './assets/logo3.png'
      },
      'to': "d93FgXokk78:APA91bH2IYpQPyOX41b30uTF53xxCUj57v7cTkzg4-7o0s8KjQewGCc1ahpokkp4bM0XRy4wnATNBuMj4nP4UkE7FTov_izjqx2Ybc9_HdDssaxrKZa1QO2Gco992jM2qrV8Fs3WvFLL",
    };

    this.http.post(`https://fcm.googleapis.com/fcm/send`, requestBody,
      { headers: fcmHeaders }).subscribe();
    return;

  }

}



// //Get today's date using the JavaScript Date object.
// var ourDate = new Date('01-02-2019');
// console.log(ourDate)
// //Change it so that it is 7 days in the past.
// var pastDate = ourDate.getDate() - 7;
// ourDate.setDate(pastDate);

// //Log the date to our web console.
// console.log(ourDate);