import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutes } from './invoice.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(InvoiceRoutes), NgxChartsModule],
  declarations: [InvoiceComponent]
})

export class InvoiceModule {}
