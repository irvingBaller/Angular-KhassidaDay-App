import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ListMemberComponent } from './list-member/list-member.component';



@NgModule({
  declarations: [AddMemberComponent, EditMemberComponent, ListMemberComponent],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }
