import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {KhassidaSinger} from '../models/khassida-singer';

@Injectable({
  providedIn: 'root'
})
export class KhassidaSingerService {

  constructor(private http: HttpClient) { }

  loadKhassidaSingers() {
    return this.http.get(`${environment.apiBaseUrl}/listKhassidaSingers`);
  }
  deleteKhassidaSinger(id) {
    return this.http.get(`${environment.apiBaseUrl}/deleteKhassidaSinger/${id}`);
  }

  editKhassidaSinger(id): Observable<KhassidaSinger> {
    return this.http.get<KhassidaSinger>(`${environment.apiBaseUrl}/editKhassidaSinger/${id}`);
  }

  addKhassidaSinger(singer : FormData) : Observable<Object> {
    return this.http.post(`${environment.apiBaseUrl}/addKhassidaSinger`, singer);
  }

  updateKhassidaSinger(id, body : FormData){
    return this.http.post(`${environment.apiBaseUrl}/updateKhassidaSinger/${id}`,body);

  }
 // editKhassidaSinger


}
