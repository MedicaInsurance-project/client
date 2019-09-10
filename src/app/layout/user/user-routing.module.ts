import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: UserComponent,
    children : [
      {
        path : '' , redirectTo: 'home' , pathMatch : 'full'
      },
      {
        path: 'home' , component : UserHomeComponent
      },
      {
        path : 'dashboard', component : UserDashboardComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
