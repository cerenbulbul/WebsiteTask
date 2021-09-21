import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private firestore: AngularFirestore ) { }


getUsers() { 
  return this.firestore.collection("users").valueChanges();
}

getMap() { 
  return this.firestore.collection("map").valueChanges();
}

UsersInformation:any
MapInformation:any

createUsers(UsersInformation:any) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .add(UsersInformation)
          .then(res => {}, err => reject(err));
  });
}

createMap(MapInformation:any) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("map")
          .add(MapInformation)
          .then(res => {}, err => reject(err));
  });
}
}
