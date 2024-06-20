import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';//Importacion de IonicModule

import { SplashScreen } from '@ionic-native/splash-screen/ngx';//Importacion de SplashScreen
import { StatusBar } from '@ionic-native/status-bar/ngx';//Importacion de StatusBar

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { HttpClientModule } from '@angular/common/http';//Importacion de HttpClientModule


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [StatusBar, SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})


export class AppModule { }
