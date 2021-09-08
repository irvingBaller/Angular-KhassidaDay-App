import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddKhassidaDroussComponent } from './add-khassida-drouss/add-khassida-drouss.component';
import { ListKhassidaDroussComponent } from './list-khassida-drouss/list-khassida-drouss.component';



@NgModule({
  declarations: [AddKhassidaDroussComponent, ListKhassidaDroussComponent],
  imports: [
    CommonModule
  ]
})
export class KhassidaDroussModule { }
