import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KhassidaDroussService} from '../../../services/khassida-drouss.service';

@Component({
  selector: 'app-list-khassida-drouss',
  templateUrl: './list-khassida-drouss.component.html',
  styleUrls: ['./list-khassida-drouss.component.css']
})
export class ListKhassidaDroussComponent implements OnInit {
  khassidas = null;
  deletionMessage = null;
  constructor(private router: Router,
              private service: KhassidaDroussService
              ) { }

  ngOnInit(): void {
    this.refresh();
  }

  addKhassidaDrouss(){
    this.router.navigateByUrl('/addKhassidaDrouss')

  }

  deleteKhassidaDrouss(id){
    console.log('Deleting Khassida Drouss with id '+id);
    this.service.deleteKhassidaDrouss(id).subscribe(
      data => {
        this.deletionMessage = data;
        this.refresh();

      }
    )
  }

  refresh(){
    this.service.loadKhassidaDrous().subscribe(
      data =>{
        this.khassidas = data;
        console.log(data);
      }
    );
  }

}
