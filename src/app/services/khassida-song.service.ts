import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {KhassidaSong} from '../models/khassida-song';

@Injectable({
  providedIn: 'root'
})
export class KhassidaSongService {

  constructor(private http: HttpClient) { }

  addKhassidaSong(song: FormData) : Observable<any>
  {
    return this.http.post(`${environment.apiBaseUrl}/addKhassidaSong`, song);
  }

  loadKhassidaSongs() : Observable<KhassidaSong>{
    return this.http.get<KhassidaSong>(`${environment.apiBaseUrl}/loadKhassidaSongs`)
  }


}
