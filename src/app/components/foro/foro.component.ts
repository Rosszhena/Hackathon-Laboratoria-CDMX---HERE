import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  issues: any;
  currentIssue: any = {
    id: '',
    userName: '',
    userID: '',
    datePost: '',
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
    this.currentIssue = issue;
  }

  addUpdate() {
    this.connection.updateIssue(this.currentIssue);
  }

}
