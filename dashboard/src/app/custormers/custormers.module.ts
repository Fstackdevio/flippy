import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CustormersComponent } from './custormers.component';
import { CustormersRoutes } from './custormers.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(CustormersRoutes), NgxChartsModule],
  declarations: [CustormersComponent]
})

export class CustormersModule {}
