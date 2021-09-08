import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import {ListMemberComponent} from '../../pages/members/list-member/list-member.component';
import {ListSurveyComponent} from '../../pages/survey/list-survey/list-survey.component';
import {ListKhassidaSingerComponent} from '../../pages/khassida-singer/list-khassida-singer/list-khassida-singer.component';
import {EditKhassidaSingerComponent} from '../../pages/khassida-singer/edit-khassida-singer/edit-khassida-singer.component';
import {KhassidaSingerComponent} from '../../pages/khassida-singer/khassida-singer/khassida-singer.component';
import {ListKhassidaSongComponent} from '../../pages/khassida-song/list-khassida-song/list-khassida-song.component';
import {AddKhassidaSongComponent} from '../../pages/khassida-song/add-khassida-song/add-khassida-song.component';
import {ListKhassidaDroussComponent} from '../../pages/khassida-drouss/list-khassida-drouss/list-khassida-drouss.component';
import {AddKhassidaDroussComponent} from '../../pages/khassida-drouss/add-khassida-drouss/add-khassida-drouss.component';
import {LoginComponent} from '../../pages/login/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {path: 'list-members', component: ListMemberComponent},
    {path: 'list-survey', component: ListSurveyComponent},
    {path: 'list-khassida-singers', component: ListKhassidaSingerComponent},
    {path: 'addKhassidaSinger', component: KhassidaSingerComponent},
    {path: 'editKhassidaSinger/:idKhassidaSinger', component: EditKhassidaSingerComponent},
    {path: 'list-khassida-songs', component: ListKhassidaSongComponent},
    {path: 'addKhassidaSong', component: AddKhassidaSongComponent},
    {path: 'listKhassidaDrouss', component: ListKhassidaDroussComponent},
    {path: 'addKhassidaDrouss', component: AddKhassidaDroussComponent},

    { path: 'icons',          component: IconsComponent },

];
