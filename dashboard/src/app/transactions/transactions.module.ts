import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TransactionsComponent } from './transactions.component';
import { TransactionsRoutes } from './transactions.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TransactionsRoutes), NgxChartsModule],
  declarations: [TransactionsComponent]
})

export class TransactionsModule {}
