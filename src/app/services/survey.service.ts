import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Survey} from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  loadSurveys() {
    return this.http.get<Survey>(`${environment.apiBaseUrl}/listSurvey`)
  }

  deleteSurvey(id) {
    return this.http.get(`${environment.apiBaseUrl}/deleteSurvey/${id}`)

  }
}
