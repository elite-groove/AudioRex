import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Material Components
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HomeComponent } from './views/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayerBarComponent } from './components/player-bar/player-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavigationComponent, PlayerBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
