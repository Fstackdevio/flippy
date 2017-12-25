import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TransfersComponent } from './transfers.component';
import { TransfersRoutes } from './transfers.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TransfersRoutes), NgxChartsModule],
  declarations: [TransfersComponent]
})

export class TransfersModule {}
