import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item {name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConnectionbdService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('agregar');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Item;
      const id = a.payload.doc.id;
      return { id, ...data};
    });
  });
  }

  listItem() {
    return this.items;
  }
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }
  eliminarItem(item) {
    this.itemDoc = this.afs.doc<Item>(`agregar/${item.id}`);
    this.itemDoc.delete();
  }
  EditarItem(item) {
    this.itemDoc = this.afs.doc<Item>(`agregar/${item.id}`);
    this.itemDoc.update(item);
  }
}