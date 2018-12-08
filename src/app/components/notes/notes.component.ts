import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  json = [
    { name: 'nani', id: 3592, date: '1995-04-02' },
    { name: 'shan', id: 3593, date: '1994-12-05' },
    { name: 'mani', id: 3594, date: '1995-07-04' },
    { name: 'venkat', id: 3595, date: '1995-6-04' },
    { name: 'narayana', id: 3596, date: '1995-8-04' },
    { name: 'prabhkar', id: 3597, date: '1995-02-04' },
    { name: 'Ramya', id: 3598, date: '1995-10-04' },
    { name: 'sumanth', id: 3599, date: '1995-1-04' },
  ]
  constructor() { }

  ngOnInit() {

  }
  // sort(type) {
  //   if (type === 'name') {
  //    for(let i=0; i< this.json.length ; i++){
  //      if(this.json[i].name.toLocaleLowerCase())
  //    }
  //   }
  // }
   swap(str, i1, i2) {
    return this.replaceAt(this.replaceAt(str, i1, str[i2]),i2,str[i1]);
}
 replaceAt(str, i, char) {
  return str.substr(0,i) + char + str.substr(i + 1)
}
  sort(str) {
    str ='abcdefghijklmnopqrstuvwxyz'
    var sorted = str;
    //Selection sort
    for (var i = 0; i < str.length; i++) {
        for(var j = i + 1; j < str.length - 1; j++) {   
            if (str[i] < str[j]) {
                str = this.swap(str, i, j)
            }
        }
    }
    console.log('data-----------------', str)
    return str;
}
}
