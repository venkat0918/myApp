import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { myModel } from '../../../assets/model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {

    // const data = new myModel();
    // console.log(data.data)
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 2
    })
console.log(formatter.format(1000))    
  }

  loginWithGoogle() {
    this.authService.login()
  }

  data(ev){
    var regexp ='/[A-Za-z]/g'
    console.log(ev.target.value.match(regexp))
    if(ev.target.value.match(regexp)){
      console.log(ev.target.value)
    }else if(!ev.target.value.match(regexp)){
      console.log('else ',ev.target.value)
    }
  }
}
