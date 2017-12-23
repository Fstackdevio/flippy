import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ServiceComponent } from './service.component';
import { ServiceRoutes } from './service.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ServiceRoutes), NgxChartsModule],
  declarations: [ServiceComponent]
})

export class ServiceModule {}
