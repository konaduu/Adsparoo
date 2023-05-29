import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { TablesComponent } from './components/admin/tables/tables.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'settings',component:SettingsComponent},
  {path:'tables',component:TablesComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
