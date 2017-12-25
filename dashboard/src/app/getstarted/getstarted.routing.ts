import { Routes } from '@angular/router';

import { GetstartedComponent } from './getstarted.component';

export const GetstartedRoutes: Routes = [{
  path: '',
  component: GetstartedComponent,
  data: {
    heading: 'Get started'
  }
}];
