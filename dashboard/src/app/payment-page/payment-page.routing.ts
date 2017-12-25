import { Routes } from '@angular/router';

import { PaymentPageComponent } from './payment-page.component';

export const PaymentPageRoutes: Routes = [{
  path: '',
  component: PaymentPageComponent,
  data: {
    heading: 'payment page'
  }
}];
