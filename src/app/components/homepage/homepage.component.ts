import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';
import { upNotification } from './../../../assets/js/push';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public query: string;
  public isList: boolean;
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('agregar').valueChanges();
    this.query = "escuela";
  }

  ngOnInit() {
    $('.botonF1').hover(function () {
      $('.bton').addClass('animacionVer');
    });
    $('.contenedor').mouseleave(function () {
      $('.bton').removeClass('animacionVer');
    });
  }

  showList() {
    this.isList = !this.isList;
  }

  upNotification() {
    upNotification();
  }

}
