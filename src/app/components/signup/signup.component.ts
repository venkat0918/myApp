import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isVerified: boolean = false;
  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
  }
  submit() {
    this.isVerified = true;
  }

  loginWithGoogle() {
    this.authService.login().then(res => {
      if (res['emailVerified']) {
        this.authService.loggedData.next(res)
      }
    })
  }
}
