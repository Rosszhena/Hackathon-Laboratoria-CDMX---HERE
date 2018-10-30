import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public start: string;
  public finish: string;

  public constructor() {
      this.start = "37.7397,-121.4252";
      this.finish = "37.6819,-121.7680";
  }

  public ngOnInit() { }

}