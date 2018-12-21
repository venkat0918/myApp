import { Component, OnInit } from '@angular/core';
import { FirebaseseService } from './services/firebasese.service';
import{Router} from '@angular/router'
import { from } from 'rxjs';
import { fromEvent } from 'rxjs';





function particale(){
  x: 100;
  y: 22;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
message;


constructor(public firebaseService: FirebaseseService, public router : Router){

  router.events.subscribe(route =>{
    // console.log(route)
  })
}

ngOnInit(){
  this.firebaseService.getPermissions()
  this.firebaseService.getMessage()
  this.message = this.firebaseService.currentMessage;
  this.firebaseService.sendNotification()

}

}
