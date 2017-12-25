import { Routes } from '@angular/router';

import { PythonComponent } from './python.component';

export const PythonRoutes: Routes = [{
  path: '',
  component: PythonComponent,
  data: {
    heading: 'python'
  }
}];
