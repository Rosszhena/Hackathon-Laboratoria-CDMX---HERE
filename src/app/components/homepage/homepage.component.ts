import { Component, OnInit } from '@angular/core';
import { upNotification } from './../../../assets/js/push';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public query: string;

  public constructor() {
    this.query = "escuela";
  }

  public ngOnInit() { }

  upNotification(){
    upNotification();
  }
}
