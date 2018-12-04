import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';


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

  getUsers() {
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
