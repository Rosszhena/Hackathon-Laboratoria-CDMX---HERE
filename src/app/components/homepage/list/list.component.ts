import { Component, OnInit } from '@angular/core';
import { ConnectionbdService } from '../../../services/connectionbd.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
  export class ListComponent implements OnInit {
    items: any;

    editarItem: any = {
      name: ''
    };

    constructor(private conexion: ConnectionbdService) {
      this.conexion.listItem().subscribe(item => {
      this.items = item;
      });
    }


    ngOnInit() {
  }

  eliminar(item) {
    this.conexion.eliminarItem(item);
  }
  editar(item) {
    this.editarItem = item;
  }
  agregarItemEditado() {
    this.conexion.EditarItem(this.editarItem);
  }
}
