import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared } from '../..';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [Shared],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
