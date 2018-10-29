import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  posts: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.posts = db.collection('issues').valueChanges();
  }

  ngOnInit() {
  }

}
