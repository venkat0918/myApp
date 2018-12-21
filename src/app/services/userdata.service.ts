import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userData: ReplaySubject<any>;
  responseData: any = null;
  constructor(public http: HttpClient) {
    this.userData = new ReplaySubject();
    this.getUsers()
  }
getUserData(){

}
  getUsers() {

    const apiData = ajax('../../assets/data.json');
// Subscribe to create the request
apiData.subscribe(res => console.log(res.status, res.response));


    const data = from(fetch('../../assets/data.json'));
  data.subscribe({
    next(response) { console.log(response); },
    error(err) { console.error('Error: ' + err); },
    complete() { console.log('Completed'); }
   });
    return this.http.get('../../assets/data.json').pipe(map(response => {
      return this.responseData = response;
    }));
  }

  getData() {
    return new Promise((resolve, reject) => {
      if (this.responseData !== null) {
        resolve(this.responseData);
      } else {
        this.getUsers().subscribe(res => {
          this.responseData = res;
          resolve(this.responseData)
        })
      }
    });
  }
}
