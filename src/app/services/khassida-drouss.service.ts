import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {KhassidaDrouss} from '../models/khassida-drouss';

@Injectable({
  providedIn: 'root'
})
export class KhassidaDroussService {

  constructor(private http: HttpClient) { }

  loadKhassidaDrous(): Observable<KhassidaDrouss>{
    return this.http.get<KhassidaDrouss>(`${environment.apiBaseUrl}/listKhassida`);
  }

  addKhassidaDrouss(drouss: FormData) : Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/uploadKhassida`, drouss);

  }

  deleteKhassidaDrouss(id){
    return this.http.get(`${environment.apiBaseUrl}/deleteKhassidaDrouss/${id}`);
  }
}
