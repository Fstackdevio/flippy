import { Routes } from '@angular/router';

import { TransfersComponent } from './transfers.component';

export const TransfersRoutes: Routes = [{
  path: '',
  component: TransfersComponent,
  data: {
    heading: 'transfer'
  }
}];
