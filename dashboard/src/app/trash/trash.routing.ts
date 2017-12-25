import { Routes } from '@angular/router';

import { TrashComponent } from './trash.component';

export const TrashRoutes: Routes = [{
  path: '',
  component: TrashComponent,
  data: {
    heading: 'trash'
  }
}];
