import { Routes } from '@angular/router';

import { InvoiceComponent } from './invoice.component';


export const InvoiceRoutes: Routes = [{
  path: '',
  component: InvoiceComponent,
  data: {
    heading: 'invoices'
  }
}];
