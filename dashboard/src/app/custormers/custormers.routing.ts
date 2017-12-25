import { Routes } from '@angular/router';

import { CustormersComponent } from './custormers.component';

export const CustormersRoutes: Routes = [{
  path: '',
  component: CustormersComponent,
  data: {
    heading: 'custormers'
  }
}];
