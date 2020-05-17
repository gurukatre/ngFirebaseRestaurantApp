import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } 
from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  restaurantCollection: AngularFirestoreCollection<Restaurant>;
  restaurants: Observable<Restaurant[]>;
  restaurantDoc: AngularFirestoreDocument<Restaurant>;

  constructor(public afs: AngularFirestore) {
    this.restaurantCollection = this.afs.collection('restoLocations');
    this.restaurants = this.restaurantCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Restaurant;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  getRestaurants() {
    return this.restaurants;
  }
}
