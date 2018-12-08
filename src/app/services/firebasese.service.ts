import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase  } from 'angularfire2/database'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseseService {
  userList: AngularFireList<any>;
  item: Observable<any>;
  itemRef:  AngularFireList<any> = null;
  constructor(public fireDb: AngularFireDatabase) {
    this.itemRef = fireDb.list('/item');
   }


  getUsers():  AngularFireList<any>  {
    // this.userList = this.fireDb.list('item')
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
