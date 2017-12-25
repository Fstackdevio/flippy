import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { GetstartedComponent } from './getstarted.component';
import { GetstartedRoutes } from './getstarted.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(GetstartedRoutes), NgxChartsModule],
  declarations: [GetstartedComponent]
})

export class GetstartedModule {}
