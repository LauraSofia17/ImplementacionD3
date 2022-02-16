import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { Dispositivo1Component } from './Componentes/dispositivo1/dispositivo1.component';
import { Dispositivo2Component } from './Componentes/dispositivo2/dispositivo2.component';
import { Dispositivo3Component } from './Componentes/dispositivo3/dispositivo3.component';
import { Dispositivo4Component } from './Componentes/dispositivo4/dispositivo4.component';
import { HomeComponent } from './Componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Dispositivo1Component,
    Dispositivo2Component,
    Dispositivo3Component,
    Dispositivo4Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
