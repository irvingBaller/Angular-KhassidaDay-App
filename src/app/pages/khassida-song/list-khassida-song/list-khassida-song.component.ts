import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KhassidaSingerService} from '../../../services/khassida-singer.service';
import {KhassidaSongService} from '../../../services/khassida-song.service';

@Component({
  selector: 'app-list-khassida-song',
  templateUrl: './list-khassida-song.component.html',
  styleUrls: ['./list-khassida-song.component.css']
})
export class ListKhassidaSongComponent implements OnInit {
  khassidaSongs = null;

  constructor(private router: Router,
              private service : KhassidaSongService
              ) { }

  ngOnInit(): void {
    this.refresh();
  }

  addKhassidaSong(){
    console.log('Add Khassida SOng');
    this.router.navigateByUrl('/addKhassidaSong');
  }

  refresh(){
    this.service.loadKhassidaSongs().subscribe(
      data =>{
        this.khassidaSongs = data;
      }
    );

  }
  deleteKhassidaSong(id){
    console.log('Deleting Khassida Sing with id '+id);
  }

}
