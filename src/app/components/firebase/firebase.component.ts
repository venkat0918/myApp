import { FirebaseseService } from './../../services/firebasese.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  customers
  message
  constructor(public fireService: FirebaseseService) { }

  ngOnInit() {
    const userId = 'user001';
    this.message = this.fireService.currentMessage
  }


  submit(name, id, age) {
    let userr = { 'name': name, 'id': id, 'age': age }
    this.fireService.insert(userr);
    this.fireService.getUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.customers = customers;
      console.log(this.customers)
    });
  }

}
