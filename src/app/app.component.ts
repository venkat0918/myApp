import { Component } from '@angular/core';
import { FirebaseseService } from './services/firebasese.service';

function particale(){
  x: 100;
  y: 22;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
message
constructor(public firebaseService: FirebaseseService){
  this.firebaseService.getPermissions()
  this.firebaseService.getMessage()
  this.message = this.firebaseService.currentMessage
}


}
