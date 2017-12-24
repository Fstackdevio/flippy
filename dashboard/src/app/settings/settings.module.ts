import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SettingsRoutes), NgxChartsModule],
  declarations: [SettingsComponent]
})

export class SettingsModule {}
