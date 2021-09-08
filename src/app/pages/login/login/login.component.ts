import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string

  constructor(private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
  }

  onSignin(form) {

  }

  signup() {
    console.log('SIgn up');
    this.router.navigateByUrl('/register');
  }
  login() {
    // if( this.username === '' || this.password === '') {
    //   console.log('Please fill in both credentials')
    //
    // }
    console.log(this.email, this.password);
    // this.authService.login(this.email, this.password).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )
  }

}
