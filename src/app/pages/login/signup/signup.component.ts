import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: User
  selectedFile = File = null
  constructor(private service: UserService) { }

  ngOnInit(): void {
  // @ts-ignore
    this.user = new User(0, '','','','','','');
  }
  register(){
  console.log('Registering');
  }
  onFileSelectedChange(event){


  }

}
