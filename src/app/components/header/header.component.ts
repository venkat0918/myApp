import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { myModel } from '../../../assets/model'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  footer: boolean = true;
  constructor() {
    let employee = new myModel();
    employee.data = "Bob Smith";
    if (employee.data) {
      console.log(employee.data);
    }
  }

  ngOnInit() { }
  hidefooter() {
    this.footer = !this.footer;
  }
}
