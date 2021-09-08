import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../../../services/survey.service';
@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {

  message = null;
  surveys = null;
  deletionMessage = null;

  constructor(private service: SurveyService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.service.loadSurveys().subscribe(
      data => {
        this.surveys = data;
        console.log(data);

      }
    );
  }

  deleteSurvey(id){
    console.log('Deleting Survey with id ' +id);
    this.service.deleteSurvey(id).subscribe(
      data => {
        this.deletionMessage = data;
        console.log(this.deletionMessage);
        this.refresh();

      }
    );

  }

}
