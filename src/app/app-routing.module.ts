import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dispositivo1Component } from './Componentes/dispositivo1/dispositivo1.component';
import { Dispositivo2Component } from './Componentes/dispositivo2/dispositivo2.component';
import { Dispositivo3Component } from './Componentes/dispositivo3/dispositivo3.component';
import { Dispositivo4Component } from './Componentes/dispositivo4/dispositivo4.component';
import { HomeComponent } from './Componentes/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'dispositivo1', component: Dispositivo1Component},
  {path: 'dispositivo2', component: Dispositivo2Component},
  {path: 'dispositivo3', component: Dispositivo3Component},
  {path: 'dispositivo4', component: Dispositivo4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
