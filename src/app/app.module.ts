import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { StdinfoModule } from './stdinfo/stdinfo.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
   
    NavbarComponent,
   
    ProfileComponent,
        SignupComponent,
        StudentDashboardComponent,
        AdminDashboardComponent,
        ViewcoursesComponent,
  ],
  imports: [
    BrowserModule,StdinfoModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
