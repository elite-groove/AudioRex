import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ChatComponent } from './views/chat/chat.component';
import { ProfileComponent } from './views/users/profile/profile.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { AuthComponent } from './views/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { PlaylistComponent } from './views/users/playlist/playlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: HomeComponent, canActivate: [], data: { animation: 'anim-1' } },
  { path: 'users/:id', component: ProfileComponent, canActivate: [], data: { animation: 'anim-3' } },
  { path: 'users/:id/playlist/:pid', component: PlaylistComponent, canActivate: [], data: { animation: 'anim-3' } },
  { path: 'chat', component: ChatComponent, canActivate: [], data: { animation: 'anim-2' } },
  {
    path: 'auth', component: AuthComponent, canActivate: [AuthGuard], data: { animation: 'anim-4' },
    children: [
      { path: 'login', component: LoginComponent, data: { animation: 'anim-4-1' } },
      { path: 'register', component: RegisterComponent, data: { animation: 'anim-4-2' } }
    ]
  },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
