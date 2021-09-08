import { Component, OnInit } from '@angular/core';
import {KhassidaSinger} from '../../../models/khassida-singer';
import {KhassidaSingerService} from '../../../services/khassida-singer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-khassida-singer',
  templateUrl: './khassida-singer.component.html',
  styleUrls: ['./khassida-singer.component.css']
})
export class KhassidaSingerComponent implements OnInit {
  singer : KhassidaSinger;
  selectedImageFile  = null;
  selectedImageFileName = '';

  constructor(private service: KhassidaSingerService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.singer = new KhassidaSinger(0,'','');
  }

  addKhassidaSinger(){
    const formdata = new FormData();

    formdata.append('fullname', this.singer.fullname);
    formdata.append('coverImageUrl', this.selectedImageFile);
    console.log(this.singer);
    this.service.addKhassidaSinger(formdata).subscribe(
      data => {
        this.router.navigateByUrl('/list-khassida-singers');
        console.log(data);
      }
    )

  }

  onFileImageSelected(event){
    //const fileImage : File  = event.target.files[0];
    //this.formData.append("image", fileImage);
    this.selectedImageFile = event.target.files[0];
    console.log(this.selectedImageFile);

    this.selectedImageFileName = this.selectedImageFile.name;

    // console.log(fileImage);
  }


}
