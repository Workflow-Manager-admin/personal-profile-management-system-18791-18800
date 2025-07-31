import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileDashboardComponent } from './profile-dashboard.component';
import { InfoCardComponent } from './info-card.component';
import { FilterTabsComponent } from './filter-tabs.component';
import { ProfileTableComponent } from './profile-table.component';

@NgModule({
  declarations: [
    ProfileDashboardComponent,
    InfoCardComponent,
    FilterTabsComponent,
    ProfileTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProfileDashboardComponent,
    InfoCardComponent,
    FilterTabsComponent,
    ProfileTableComponent
  ]
})
export class ProfileDashboardModule { }
