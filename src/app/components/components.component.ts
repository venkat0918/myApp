import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserdataService } from '../services/userdata.service';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  rows;
  columnName = [
    { "name": 'Name', 'value': true },
    { "name": 'Gender', 'value': true },
    { "name": 'Company', 'value': true },
    { "name": 'Age', 'value': false },
    { "name": 'Department', 'value': false },
    { "name": 'PhNo', 'value': false },
    { "name": 'Location', 'value': false },
    { "name": 'EmpId', 'value': false }
  ];
  selected = [];
  columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'gender', name: 'Gender' },
    { prop: 'company', name: 'Company' }
  ];
  constructor(public userService: UserdataService, public ser : ManageService) {


  }


  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }




  ngOnInit() {
    this.userService.getData().then(res => {
      this.rows = res;
    })
  }

  select(type, flag) {
    console.log(flag, type)
    if (!flag) {
      if (!this.columns.find(x => x.name.toLocaleLowerCase() === type.toLocaleLowerCase())) {
        const newCol = { name: type, prop: type.toLocaleLowerCase() };
        this.columns.push(newCol)
      }
    } else {
      this.columns.forEach((x, i) => {
        if (x.name === type) {
          this.columns.splice(i, 1)
        }
      })
    }
  }


}