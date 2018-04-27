import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InventarioComponent } from './inventario.component';
import { InventarioListaComponent } from './inventario-lista.component';
import { InventarioDetalleComponent } from './inventario-detalle.component';

import { InventarioService } from './inventario.service.service';
import { InventarioRoutingModule } from './inventario-routing.module';

import {AuthGuard} from '../login/auth.guard';
@NgModule({
    declarations: [
        InventarioComponent,
        InventarioListaComponent,
        InventarioDetalleComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        InventarioRoutingModule
    ],
    exports: [
        InventarioComponent,
        InventarioListaComponent,
        InventarioDetalleComponent
    ],
    providers: [InventarioService, AuthGuard]
})

export class InventarioModule{}