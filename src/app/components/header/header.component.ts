import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  footer: boolean = true;
  isLoggedIn: boolean = false;
  userDetails: any;

  constructor(public authService: AuthServiceService, public router: Router) {
  }

  ngOnInit() {
    this.authService.loggedData.subscribe(res => {
      if (res['emailVerified']) {
        this.userDetails = res.metadata;
        this.isLoggedIn = res['emailVerified'];
        this.router.navigateByUrl('/home/dashboard')
      }
    })
  }

  hidefooter() {
    this.footer = !this.footer;
  }
}
