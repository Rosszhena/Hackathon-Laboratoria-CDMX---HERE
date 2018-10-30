import { Component, OnInit } from '@angular/core';
import { pruebaNotification } from './../../../assets/js/push1.js';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }
  
  pruebaNotificacion(){
    pruebaNotification();
  }
}
