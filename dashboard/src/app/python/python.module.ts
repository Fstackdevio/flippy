import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PythonComponent } from './python.component';
import { PythonRoutes } from './python.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PythonRoutes), NgxChartsModule],
  declarations: [PythonComponent]
})

export class PythonModule {}
