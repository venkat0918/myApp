import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean= false;
  footer:boolean= true;
  constructor() { }

  ngOnInit() {
  }
hidefooter(){
  this.footer = !this.footer;
}
}
