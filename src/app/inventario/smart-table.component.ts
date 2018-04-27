import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Component, OnInit, HostBinding } from '@angular/core';

import { InventarioService } from './inventario.service.service';
import { Inventario } from './inventario';
import { Router } from '@angular/router';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css'],
})


export class SmartTableComponent  implements OnInit {
  lista: Inventario[];
  constructor(
    private router: Router,
    private servicio:InventarioService
  ) {
 
   }

  ngOnInit() {
    this.servicio.getInventarios().subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
    )
  }

  settings = {
    add: {
      addButtonContent: '<i class="material-icons">add</i>',
      createButtonContent: '<i class="material-icons">check</i>',
      cancelButtonContent: '<i class="material-icons">close</i>',
    },
    edit: {
      editButtonContent: '<i class="material-icons">create</i>',
      saveButtonContent: '<i class="material-icons">check</i>',
      cancelButtonContent: '<i class="material-icons">close</i>',
    },
    delete: {
      deleteButtonContent: '<i class="material-icons">delete</i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
      },
      producto: {
        title: 'Producto',
      },
      existencia: {
        title: 'Existencia',
      },
      precio: {
        title: 'Precio',
      },
      proveedor: {
        title: 'Proveedor',
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];
}