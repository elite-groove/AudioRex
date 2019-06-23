import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// plyr module
import { PlyrModule } from 'ngx-plyr';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ng zorro
import { NzCardModule } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_ICONS } from 'ng-zorro-antd';


// classes
import { DefaultPlyrDriver } from './classes/default-plyr-driver';


//icon 
import { SettingOutline, EditOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ SettingOutline, EditOutline ];

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
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TokenGetter } from './classes/token-getter';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { UrlSerializer } from '@angular/router';
import { CustomUrlSerializer } from './classes/custom-url-serializer';
import { DatestringPipe } from './pipes/datestring.pipe';

registerLocaleData(en);

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
    RegisterComponent,
    DateformatPipe,
    DatestringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PlyrModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzCardModule,
    NgxAudioPlayerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: TokenGetter,
        whitelistedDomains: ['http://localhost:3000'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [
    DefaultPlyrDriver,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
