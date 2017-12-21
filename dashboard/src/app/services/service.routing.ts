import { Routes } from '@angular/router';

import { ServiceComponent } from './service.component';

export const ServiceRoutes: Routes = [{
  path: '',
  component: ServiceComponent,
  data: {
    heading: 'Services'
  }
}];
