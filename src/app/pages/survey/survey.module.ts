import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';



@NgModule({
  declarations: [ListSurveyComponent, AddSurveyComponent],
  imports: [
    CommonModule
  ]
})
export class SurveyModule { }
