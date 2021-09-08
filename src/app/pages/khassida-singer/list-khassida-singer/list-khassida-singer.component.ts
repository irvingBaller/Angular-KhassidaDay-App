import { Component, OnInit } from '@angular/core';
import {KhassidaSinger} from '../../../models/khassida-singer';
import {KhassidaSingerService} from '../../../services/khassida-singer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-khassida-singer',
  templateUrl: './list-khassida-singer.component.html',
  styleUrls: ['./list-khassida-singer.component.css']
})
export class ListKhassidaSingerComponent implements OnInit {
    khassidaSingers = null;
    deletionMessage = null;
  constructor(private service: KhassidaSingerService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.service.loadKhassidaSingers().subscribe(
      data => {
        this.khassidaSingers = data;
        console.log(data);
      }
    );
  }

  deleteKhassidaSinger(id){
    console.log('Deleting Khassida SInger with id ' + id);
    this.service.deleteKhassidaSinger(id).subscribe(
      data => {
        console.log(data);
        this.deletionMessage = data;
        this.refresh();
      }
    );
  }
  editKhassidaSinger(id){
    console.log('Editing Khassida SInger with id ' + id);
    this.router.navigate(['editKhassidaSinger', id]);


  }

}
