import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KhassidaSingerService} from '../../../services/khassida-singer.service';

@Component({
  selector: 'app-edit-khassida-singer',
  templateUrl: './edit-khassida-singer.component.html',
  styleUrls: ['./edit-khassida-singer.component.css']
})
export class EditKhassidaSingerComponent implements OnInit {

  foundKhassidaSinger = null;
  id  = 0;
  selectedImageFile  = null;
  selectedImageFileName = '';

  constructor(private activatedRoute: ActivatedRoute,
              private service : KhassidaSingerService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.idKhassidaSinger;
        console.log(this.id);
      }
    );

    this.service.editKhassidaSinger(this.id).subscribe(
      data => {
        console.log('Editing Khassida Singer ' + data.fullname);
        this.foundKhassidaSinger = data;
      }
    );
  }

  onFileImageSelected(event){
    this.selectedImageFile = event.target.files[0];
    console.log(this.selectedImageFile);
    this.selectedImageFileName = this.selectedImageFile.name;

  }
  updateKhassidaSinger() {
    const formdata = new FormData();
    console.log('Fullname ' + this.foundKhassidaSinger.fullname);

    formdata.append('fullname', this.foundKhassidaSinger.fullname);
    formdata.append('coverImageUrl', this.selectedImageFile);
    this.service.updateKhassidaSinger(this.id, formdata).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/list-khassida-singers');
      }
    )
  }

}
