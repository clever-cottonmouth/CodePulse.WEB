import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model:LoginRequest;
  constructor(private authService: AuthService, private cookieService: CookieService, private router:Router) {
    this.model = {
      email:'',
      password:''
    };
  }

  onFormSubmit():void{
    console.log(this.model);
    this.authService.login(this.model)
    .subscribe({
      next: (res) => {
        //set cookie
        this.cookieService.set('Authorization', `Bearer ${res.token}`,
          undefined,'/',undefined, true,'Strict'
        );

        //set user
        this.authService.setUser({
          email: res.email,
          roles:res.roles
        });
        this.router.navigateByUrl('/');
      }
    })
  }
}
