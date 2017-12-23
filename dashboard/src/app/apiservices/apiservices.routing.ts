import { Routes } from '@angular/router';

import { ApiServicesComponent } from './apiservices.component';

export const ApiServicesRoutes: Routes = [{
  path: '',
  component: ApiServicesComponent,
  data: {
    heading: 'Api Services'
  }
}];
