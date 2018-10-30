import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  issue: any = {
    id: '',
    userName: '',
    userID: '',
    datePost: '',
    publication: ''
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
  }

  add(){
    this.connection.addIssue(this.issue);
    this.issue.publication = '';
  }

}
