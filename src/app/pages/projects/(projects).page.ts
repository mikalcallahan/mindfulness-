import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout';
import { projects } from './projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export default class ProjectsPage {
  projects = projects;
}
