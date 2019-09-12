import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PolicyComponent } from './policy/policy.component';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ApplyForClaimsComponent } from './apply-for-claims/apply-for-claims.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [UserHomeComponent, UserNavBarComponent, UserFooterComponent, UserDashboardComponent, PolicyComponent, UserComponent, UserProfileComponent, ApplyForClaimsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
