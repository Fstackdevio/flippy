import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { IncomesComponent } from './incomes.component';
import { IncomesRoutes } from './incomes.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(IncomesRoutes), NgxChartsModule],
  declarations: [IncomesComponent]
})

export class IncomesModule {}
