import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { GradientHeaderComponent } from './components/gradient-header.component';
import { InfoCardComponent } from './components/info-card.component';
import { TabsComponent } from './components/tabs.component';
import { SearchBarCtaComponent } from './components/search-bar-cta.component';
import { ProfileTableComponent } from './components/profile-table.component';
import { StatusBadgeComponent } from './components/status-badge.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GradientHeaderComponent,
    InfoCardComponent,
    TabsComponent,
    SearchBarCtaComponent,
    ProfileTableComponent,
    StatusBadgeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
