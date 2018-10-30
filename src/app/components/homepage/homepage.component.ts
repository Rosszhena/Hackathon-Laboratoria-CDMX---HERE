import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.botonF1').hover(function () {
      $('.bton').addClass('animacionVer');
    })
    $('.contenedor').mouseleave(function () {
      $('.bton').removeClass('animacionVer');
    })
  }


}
