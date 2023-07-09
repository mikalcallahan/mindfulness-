import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  links = [
    {
      title: 'github',
      link: 'https://github.com/mikalcallahan',
    },
    {
      title: 'webring',
      link: 'https://webring.xxiivv.com',
    },
  ];
}
