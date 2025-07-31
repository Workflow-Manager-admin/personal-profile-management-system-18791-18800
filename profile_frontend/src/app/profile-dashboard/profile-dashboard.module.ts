import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileDashboardComponent } from './profile-dashboard.component';

@NgModule({
  declarations: [ProfileDashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProfileDashboardComponent]
})
export class ProfileDashboardModule { }
