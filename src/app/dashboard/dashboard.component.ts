import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { User } from '../model/Users';
import { ViewEncapsulation } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FormDialogComponentComponent } from '../form-dialog-component/form-dialog-component.component';
import { DeleteDialogComponentComponent } from '../delete-dialog-component/delete-dialog-component.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 50, lng: 14 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];


  Users: any;
  User_Array: User[] = [];
  MapMark: any;
  Toast: boolean = false;
  userLatitude: string = ''
  userLongitude: string = ''
  address: string = ''
  htmlstring: string = ``;

  lat:any;
  lng:any;


  //New Users information
  newUserForm = this.fb.group({
    Address: ['', Validators.required],
    Size: ['', Validators.required],
    Year: ['', Validators.required],
  });

  constructor(public UserService: UsersService, private fb: FormBuilder, private dialog: MatDialog) {

  }

  openAddDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(FormDialogComponentComponent, dialogConfig);
  }

  openDeleteDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DeleteDialogComponentComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res => {
      this.Users = res
      this.htmlstring = ``
      for (let i = 0; i < res.length; i++) {
        let item = i +1;
        this.htmlstring += `<div class="item"> <strong>` + `User: `+ item + ` </strong> <br> <strong>Address:</strong> `
          + this.Users[i].Address + ` <br><strong>Size:</strong> `
          + this.Users[i].Size + `<strong><br>Year: </strong>`
          + this.Users[i].Year
          + `</div>`
      }
    })

    

    this.UserService.getUsers().subscribe(res => {
      this.MapMark = res
      for (let i = 0; i < res.length; i++) {
        this.markerPositions.push({
          'lat': this.MapMark[i].lat,
          'lng': this.MapMark[i].lng
        })
      }
    })
  }

  public formattedAddress = '';
  public options = {
    types: [],
    componentRestrictions: { country: 'DE' }
  } as unknown as Options

  public handleAddressChange(address: any) {
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()
    this.address = address.formatted_address
  }



}
