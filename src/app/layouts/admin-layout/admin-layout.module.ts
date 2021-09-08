import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ListMemberComponent} from '../../pages/members/list-member/list-member.component';
import {ListSurveyComponent} from '../../pages/survey/list-survey/list-survey.component';
import {KhassidaSingerComponent} from '../../pages/khassida-singer/khassida-singer/khassida-singer.component';
import {ListKhassidaSingerComponent} from '../../pages/khassida-singer/list-khassida-singer/list-khassida-singer.component';
import {EditKhassidaSingerComponent} from '../../pages/khassida-singer/edit-khassida-singer/edit-khassida-singer.component';
import {AddKhassidaSongComponent} from '../../pages/khassida-song/add-khassida-song/add-khassida-song.component';
import {ListKhassidaSongComponent} from '../../pages/khassida-song/list-khassida-song/list-khassida-song.component';
import {AddKhassidaDroussComponent} from '../../pages/khassida-drouss/add-khassida-drouss/add-khassida-drouss.component';
import {ListKhassidaDroussComponent} from '../../pages/khassida-drouss/list-khassida-drouss/list-khassida-drouss.component';
import {LoginComponent} from '../../pages/login/login/login.component';
import {SignupComponent} from '../../pages/login/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    IconsComponent,
    MapsComponent,
    ListMemberComponent,
    ListSurveyComponent,
    KhassidaSingerComponent,
    ListKhassidaSingerComponent,
    EditKhassidaSingerComponent,
    ListKhassidaSingerComponent,
    AddKhassidaSongComponent,
    ListKhassidaSongComponent,
    AddKhassidaDroussComponent,
    ListKhassidaDroussComponent,
    LoginComponent,
    SignupComponent,
  ]
})

export class AdminLayoutModule {}
