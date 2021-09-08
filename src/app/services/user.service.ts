import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<Object> {
    return this.http.get(`${environment.apiBaseUrl}/listMembers`);
  }

  deleteUser(id){
    return this.http.get(`${environment.apiBaseUrl}/deleteMember/${id}`);
  }
}
