import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
isVerified: boolean= false;
  constructor() { }

  ngOnInit() {
  }
  submit(){
    this.isVerified = true;
  }
}
