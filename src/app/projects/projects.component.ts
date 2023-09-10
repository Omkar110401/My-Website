import { Component } from '@angular/core';
import { PROJECTS } from './project-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects=PROJECTS;
}
