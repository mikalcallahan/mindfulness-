import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components';

const DefaultModules = [CommonModule, RouterModule];
const Components = [NavbarComponent];

export const Shared = [...DefaultModules, ...Components];
