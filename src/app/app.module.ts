import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// plyr module
import { PlyrModule } from 'ngx-plyr';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// classes
import { DefaultPlyrDriver } from './classes/default-plyr-driver';

// views
import { HomeComponent } from './views/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayerBarComponent } from './components/player-bar/player-bar.component';
import { ChatComponent } from './views/chat/chat.component';
import { UsersComponent } from './views/users/users.component';
import { ProfileComponent } from './views/users/profile/profile.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AuthComponent } from './views/auth/auth.component';
import { RegisterComponent } from './views/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PlayerBarComponent,
    ChatComponent,
    UsersComponent,
    ProfileComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PlyrModule
  ],
  providers: [
    DefaultPlyrDriver
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
