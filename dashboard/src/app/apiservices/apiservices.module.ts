import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ApiServicesComponent } from './apiservices.component';
import { ApiServicesRoutes } from './apiservices.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ApiServicesRoutes), NgxChartsModule],
  declarations: [ApiServicesComponent]
})

export class ApiServicesModule {}
