import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProfileDashboardModule } from './profile-dashboard/profile-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProfileDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
