import { Routes } from '@angular/router';

import { PhpComponent } from './php.component';

export const PhpRoutes: Routes = [{
  path: '',
  component: PhpComponent,
  data: {
    heading: 'php'
  }
}];
