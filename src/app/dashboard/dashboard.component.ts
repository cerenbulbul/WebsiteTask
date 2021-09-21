import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 20, lng: 20 };
  zoom = 2;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
    console.log(event.latLng)
  }

  Users: any;
  MapMark: any;
  Toast: boolean = false;
  userLatitude: string = ''
  userLongitude: string = ''
  address: string = ''

  //New Users information
  newUserForm = this.fb.group({
    Address: ['', Validators.required],
    Size: ['', Validators.required],
    Year: ['', Validators.required],
  });

  constructor(public UserService: UsersService, private fb: FormBuilder,) {

  }

  getUserInformation() {
    this.UserService.createUsers({
      'Address': this.address,
      'Size': this.newUserForm.value.Size,
      'Year': this.newUserForm.value.Year,
      'lat': this.userLatitude,
      'lng': this.userLongitude
    });

    this.UserService.createMap({
      'lat': this.userLatitude,
      'lng': this.userLongitude
    })

    this.Toast = true;
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res => {
      console.log("res", res)
      this.Users = res
    })

    this.UserService.getMap().subscribe(res => {
      console.log("res", res)
      this.MapMark = res
      for(let i=0; i<res.length; i++) {
        this.markerPositions.push(this.MapMark[i])
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
