import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/list-members',     title: 'Members',         icon:'nc-bank',       class: '' },
    { path: '/list-survey',     title: 'Surveys',         icon:'nc-bank',       class: '' },
    { path: '/list-khassida-singers',     title: 'Khassida Singers',         icon:'nc-bank',       class: '' },
    { path: '/list-khassida-songs',     title: 'Khassida Songs',         icon:'nc-bank',       class: '' },
    { path: '/listKhassidaDrouss',     title: 'Khassida Drouss',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
