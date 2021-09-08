import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  users = null;
  message = null;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.service.loadUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    );
  }

  deleteUser(id){
    console.log('Deleting User with id' +id);
    this.service.deleteUser(id).subscribe(
      data =>{
        this.refresh();
        console.log(data);
        this.message = data;
      }
    );
  }

}
