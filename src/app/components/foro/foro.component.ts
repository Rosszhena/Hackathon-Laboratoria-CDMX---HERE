import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  issues: any;
  updateIssue: any = {
    publication: ''
  }

  constructor(private connection: ConnectionService) {
    this.connection.listIssues().subscribe(issue => {
      this.issues = issue;
    })
  }

  ngOnInit() {
  }

  delete(issue) {
    this.connection.deleteIssue(issue);
  }

  update(issue) {
    this.updateIssue = issue;
  }

  addUpdate(){
    this.connection.updateIssue(this.updateIssue);
  }

}
