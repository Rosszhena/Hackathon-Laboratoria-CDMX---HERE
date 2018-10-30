import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Issue {
  id?: string;
  userName?: string;
  userID?: string;
  datePost?: any;
  publication?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  [x: string]: any;
  private issuesCollection: AngularFirestoreCollection<Issue>;
  issues: Observable<Issue[]>;
  private issueDoc: AngularFirestoreDocument<Issue>;

  constructor(private afs: AngularFirestore) {
    this.issuesCollection = afs.collection<Issue>('issues');
    this.issues = this.issuesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Issue;
        data.id = action.payload.doc.id;
        return data;
      })
    }))
  }

  listIssues() {
    return this.issues;
  }

  addIssue(issue: Issue) {
    this.issuesCollection.add(issue);
  }

  deleteIssue(issue) {
    this.issueDoc = this.afs.doc<Issue>(`issues/${issue.id}`);
    this.issueDoc.delete();
  }

  updateIssue(issue) {
    this.issueDoc = this.afs.doc<Issue>(`issues/${issue.id}`);
    this.issueDoc.update(issue);
  }
}
