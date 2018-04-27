import { Component, OnInit, HostBinding } from '@angular/core';

import { InventarioService } from './inventario.service.service';
import { Inventario } from './inventario';
import { Router } from '@angular/router';

import { slide } from './animations';
@Component({
  selector: 'inventario-lista',
  templateUrl: './inventario-lista.component.html',
  animations: [slide],
  styleUrls: ['./inventario.component.css']
})
export class InventarioListaComponent implements OnInit {

  lista: Inventario[];
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  //@HostBinding('style.position') position = 'absolute';

  constructor(
    private router: Router,
    private servicio:InventarioService
  ) { }

  ngOnInit() {
    this.servicio.getInventarios().subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
    )
  }

  editar(item: Inventario){
    let link = ['/inventario/detalle',item.id];
    this.router.navigate(link);
  }

  borrar(item: Inventario){
    if(!item) return;
    this.servicio.delInventario(item.id).subscribe(rs => console.log(rs), er => console.log(er), () => {
      this.lista=this.lista.filter(h => h !== item)
    })
  }

}
