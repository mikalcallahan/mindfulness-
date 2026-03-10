import { Component } from '@angular/core';
import { projectsList } from './index';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, LayoutComponent],
  template: `
    <app-layout
      header="A few things I've worked on"
    >
  <ul>
    @for(project of projects; track project.link) {
    <li class="link">
      <h5>
        <a [href]="project.link" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
      </h5>
    </li>
    }
  </ul>
</app-layout>
`
})
export default class ProjectsComponent {
  projects = projectsList;
}

