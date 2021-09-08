import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhassidaSingerComponent } from './khassida-singer/khassida-singer.component';
import { ListKhassidaSingerComponent } from './list-khassida-singer/list-khassida-singer.component';
import { EditKhassidaSingerComponent } from './edit-khassida-singer/edit-khassida-singer.component';



@NgModule({
  declarations: [KhassidaSingerComponent, ListKhassidaSingerComponent, EditKhassidaSingerComponent],
  imports: [
    CommonModule
  ]
})
export class KhassidaSingerModule { }
