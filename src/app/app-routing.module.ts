import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { StdinfoModule } from './stdinfo/stdinfo.module';

const routes: Routes = [

  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"signup",component:SignupComponent},
  {path:"AdminDashboard",component:AdminDashboardComponent},
  {path:"StudentDashboard",component:StudentDashboardComponent},
  {path: "viewcourses",component:ViewcoursesComponent},
  {path: "stdinfo/index",component:IndexComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
