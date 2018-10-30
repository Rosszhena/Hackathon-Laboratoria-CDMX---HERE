import { Component, OnInit } from '@angular/core';
import { ConnectionbdService } from '../../../services/connectionbd.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {
  item: any = {
    name:''
  }

  constructor(private servicio: ConnectionbdService) {}
  ngOnInit() {
    }

    agregar() {
      this.servicio.agregarItem(this.item);
      this.item.name = '';
    }
  }
