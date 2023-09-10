import { Component } from '@angular/core';
import { EDUCATION } from './education-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education=EDUCATION;
}
