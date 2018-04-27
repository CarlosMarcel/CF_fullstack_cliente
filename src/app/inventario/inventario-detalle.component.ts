import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { InventarioService } from './inventario.service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventarioValidator } from './inventario.validator';
import { Inventario } from './inventario';
import { slide } from './animations';
import { MaterializeModule } from 'angular2-materialize';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'inventario-detalle',
  templateUrl: './inventario-detalle.component.html',
  animations: [slide]
})
export class InventarioDetalleComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  //@HostBinding('style.position') position = 'absolute';

  titulo = "";
  form: FormGroup;
  inventario: Inventario[];
  isEdition = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventarioService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if(!id){
      this.titulo = "Agregar un nuevo registro";
      this.crearControles();
      return;
    }else{
      this.titulo = "Edición del Registro";
      this.crearControlesEditar();
    }

   


    this.service.getInventario(id).subscribe(
      rs => this.inventario = rs,
      er => console.log('Error: %s', er),
      () =>{
        if(this.inventario.length > 0){
          //Si hay registros
          this.isEdition = true;
          this.form.patchValue({
            id: this.inventario[0].id,
            producto: this.inventario[0].producto,
            existencia: this.inventario[0].existencia,
            precio: this.inventario[0].precio,
            proveedor: this.inventario[0].proveedor
          })
        }
      }
    )
    console.log(id);
  }

  crearControles(){
    this.form = this.fb.group({
      id: ['', Validators.required, InventarioValidator.valorUnico(this.service)],
      producto: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required]
    })
  }

  
  crearControlesEditar(){
    this.form = this.fb.group({
      id: ['', Validators.required],
      producto: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required]
    })
  }

  guardarInventario(){
    if(this.isEdition){
      this.updateInventario(this.form.value);
    }else{
      this.agregarInventario(this.form.value);
    }
  }

  agregarInventario(inventario: Inventario){
    this.service.addInventario(inventario).subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => toast('El producto se ha registrado exitosamente!', 4000)
      
    );
  }

  updateInventario(inventario: Inventario){
    if(!inventario) return;
    this.service.putInventario(inventario).subscribe(rt => console.log(rt),er => console.log(er), () => this.goLista());
    toast('El producto se ha actualizado exitosamente!', 4000);
  }

  goLista(){
    let link = ['/inventario/lista'];
    this.router.navigate(link);
  }

  limpiarFormulario(){
    this.form.reset();
  }

}