import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router} from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { UserinfoComponent } from '../userinfo/userinfo.component';
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
  handlers: any;
  constructor(public authService: AuthServiceService,
    public router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedin') === 'Y') {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/home/dashboard')
    }
    this.authService.loggedData.subscribe(res => {
      if (res !== null) {
        if (res['emailVerified']) {
          this.userDetails = res;
          this.isLoggedIn = res['emailVerified'];
          this.router.navigateByUrl('/home/dashboard')
        }
      } else {
         window.location.reload();
      }
    });
  }

  open(): void {
    this.dialog.open(UserinfoComponent, {
      width: '250px',
      data: this.userDetails
    });
  }

  logout() {
    this.authService.logOut()
    localStorage.removeItem('isLoggedin')
  }

  hidefooter() {
    this.footer = !this.footer;
  }


}
