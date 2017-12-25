import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PaymentPageComponent } from './payment-page.component';
import { PaymentPageRoutes } from './payment-page.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PaymentPageRoutes), NgxChartsModule],
  declarations: [PaymentPageComponent]
})

export class PaymentPageModule {}
