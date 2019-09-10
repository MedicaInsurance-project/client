import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PolicyComponent } from './policy/policy.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserHomeComponent, UserNavBarComponent, UserFooterComponent, UserDashboardComponent, PolicyComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
