import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { JavascriptComponent } from './javascript.component';
import { JavascriptRoutes } from './javascript.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(JavascriptRoutes), NgxChartsModule],
  declarations: [JavascriptComponent]
})

export class JavascriptModule {}
