import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListKhassidaSongComponent } from './list-khassida-song/list-khassida-song.component';
import { AddKhassidaSongComponent } from './add-khassida-song/add-khassida-song.component';
import { EditKhassidaSongComponent } from './edit-khassida-song/edit-khassida-song.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListKhassidaSongComponent, AddKhassidaSongComponent, EditKhassidaSongComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class KhassidaSongModule { }
