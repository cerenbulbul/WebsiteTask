import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }

  getFireStore() {
    return this.firestore.collection("users").get();
  }


  getUsers() {
    return this.firestore.collection("users").valueChanges();
  }

  getMap() {
    return this.firestore.collection("map").valueChanges();
  }

  UsersInformation: any
  MapInformation: any
  length: any

  createUsers(UsersInformation: any) {

    this.getUsers().subscribe(res => {
      this.length = res.length + 1
    }) 
    
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("users")
        .doc("User" + this.length)
        .set(UsersInformation)
        .then(res => { }, err => reject(err));
    });

    
  }

  deleteUsers(Number: number) {
    console.log(Number)
    return this.firestore
      .collection("users")
      .doc('User' + Number)
      .delete();
  }

  createMap(MapInformation: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("map")
        .add(MapInformation)
        .then(res => { }, err => reject(err));
    });
  }
}
