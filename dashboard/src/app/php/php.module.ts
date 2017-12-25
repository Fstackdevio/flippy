import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PhpComponent } from './php.component';
import { PhpRoutes } from './php.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PhpRoutes), NgxChartsModule],
  declarations: [PhpComponent]
})

export class PhpModule {}
