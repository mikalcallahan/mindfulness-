import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Wonderlabs',
      link: 'https://wonderlabs.ca',
    },
    {
      name: 'Vish',
      link: 'https://getvish.com',
    },
    {
      name: 'Cosé',
      link: 'https://www.figma.com/file/LSCWlA3XrTkpU8RUPlYV5grz/conceptions?node-id=177%3A38',
    },
    {
      name: 'Mindfulstreaming',
      link: 'http://mindfulstreaming.now.sh',
    },
    {
      name: 'VueBoilerplate',
      link: 'https://github.com/mikalcallahan/vuejs-boilerplate',
    },
    {
      name: 'Sinnoise',
      link: 'https://github.com/mikalcallahan/sinnoise',
    },
    {
      name: 'Metamorphosis',
      link: 'https://github.com/mikalcallahan/metamorphosis',
    },
    {
      name: 'Conscient',
      link: 'https://github.com/mikalcallahan/conscient',
    },
  ];
}
