import { Component, OnInit } from '@angular/core';
import {KhassidaDrouss} from '../../../models/khassida-drouss';
import {KhassidaDroussService} from '../../../services/khassida-drouss.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-khassida-drouss',
  templateUrl: './add-khassida-drouss.component.html',
  styleUrls: ['./add-khassida-drouss.component.css']
})
export class AddKhassidaDroussComponent implements OnInit {
  khassida : KhassidaDrouss = null;
  selectedCoverImageFile : File = null;
  selectedPdfFile : File = null;

  error = null;

  constructor(private service: KhassidaDroussService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.khassida = new KhassidaDrouss(0,'','','');
  }

  onFileImageSelected(event){
    this.selectedCoverImageFile = event.target.files[0];

  }
  onFilePdfSelected(event){
    this.selectedPdfFile = event.target.files[0]

  }
  addKhassidaDrouss(){
    const formData = new FormData();
    formData.append('khassidaName',this.khassida.khassida_name);
    formData.append('coverImage', this.selectedCoverImageFile);
    formData.append('khassidaPdf', this.selectedPdfFile);
    this.service.addKhassidaDrouss(formData).subscribe(
      data =>{
        console.log(data);
        this.router.navigateByUrl('/listKhassidaDrouss');
      }, error => {
        console.log(error.message);
        this.error = error.message;

      }
    );
  }

}
