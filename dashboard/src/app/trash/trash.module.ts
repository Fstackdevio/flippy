import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TrashComponent } from './trash.component';
import { TrashRoutes } from './trash.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TrashRoutes), NgxChartsModule],
  declarations: [TrashComponent]
})

export class TrashModule {}
