import { Component, OnInit } from '@angular/core';
import {KhassidaSong} from '../../../models/khassida-song';
import {KhassidaSongService} from '../../../services/khassida-song.service';
import {KhassidaSingerService} from '../../../services/khassida-singer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-khassida-song',
  templateUrl: './add-khassida-song.component.html',
  styleUrls: ['./add-khassida-song.component.css']
})
export class AddKhassidaSongComponent implements OnInit {
khassidaSong : KhassidaSong = null;
selectedAudioFile = null;
selectedAudioFileName = '';
khassidaSingers = null;
  constructor(private songService: KhassidaSongService,
              private singerService: KhassidaSingerService,
              private router: Router
              ) { }


  ngOnInit(): void {
    this.khassidaSong = new KhassidaSong(0,'','','');
    this.singerService.loadKhassidaSingers().subscribe(
      data => {
        this.khassidaSingers = data;
        console.log(data);
      }
    );
  }

  onFileImageSelected(event){
    this.selectedAudioFile = event.target.files[0];
    console.log(this.selectedAudioFile);

  }
  addKhassidaSong(){
    const formData = new FormData();
    formData.append('khassidaSongName', this.khassidaSong.khassidaSongName);
    formData.append('khassidaSongUrl', this.selectedAudioFile);
    formData.append('khassidaSingerId', this.khassidaSong.khassidaSingerId);
    console.log(this.khassidaSong);
    this.songService.addKhassidaSong(formData).subscribe(
      data =>{
        console.log(data);
        this.router.navigateByUrl('/list-khassida-songs')

      }
    );


  }

}
