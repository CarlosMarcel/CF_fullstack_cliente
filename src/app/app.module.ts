import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactosComponent } from './contactos/contactos.component';
//import { InventarioComponent } from './inventario/inventario.component';
//import { InventarioListaComponent } from './inventario/inventario-lista.component';
//import { InventarioDetalleComponent } from './inventario/inventario-detalle.component';
import { InventarioModule } from './inventario/inventario.module';
import { InventarioService } from './inventario/inventario.service.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { MaterializeModule } from 'angular2-materialize';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ContactosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InventarioModule,
    MaterializeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
