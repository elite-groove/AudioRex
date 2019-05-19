import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ChatComponent} from './views/chat/chat.component';
import {ProfileComponent} from './views/users/profile/profile.component';
import {LoginComponent} from './views/auth/login/login.component';
import {RegisterComponent} from './views/auth/register/register.component';
import {AuthComponent} from './views/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] ,data: { animation: 'anim-1' }},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard] ,data: { animation: 'anim-2' }},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] ,data: { animation: 'anim-3' }},
  {path: 'auth', component: AuthComponent ,data: { animation: 'anim-4' },
    children: [
      {path: 'login', component: LoginComponent, data: { animation: 'anim-4-1' }},
      {path: 'register', component: RegisterComponent, data: { animation: 'anim-4-2' }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
