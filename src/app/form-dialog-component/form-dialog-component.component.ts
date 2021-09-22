import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-form-dialog-component',
  templateUrl: './form-dialog-component.component.html',
  styleUrls: ['./form-dialog-component.component.css']
})
export class FormDialogComponentComponent implements OnInit {

  constructor(private fb: FormBuilder, public UserService: UsersService) { }

  userLatitude: string = ''
  userLongitude: string = ''
  address: string = ''
  center: google.maps.LatLngLiteral = { lat: 20, lng: 20 };
  zoom = 2;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  Users: any;


  //New Users information
  newUserForm = this.fb.group({
    Address: ['', Validators.required],
    Size: ['', Validators.required],
    Year: ['', Validators.required],
  });

  getUserInformation() {
    this.UserService.getUsers().subscribe(res => {
      this.Users = res
    })

    console.log(this.Users.length)
    this.UserService.createUsers({
      'Address': this.address,
      'Size': this.newUserForm.value.Size,
      'Year': this.newUserForm.value.Year,
      'lat': this.userLatitude,
      'lng': this.userLongitude
    }, this.Users.length);

    

    this.UserService.createMap({
      'lat': this.userLatitude,
      'lng': this.userLongitude
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

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res => {
      this.Users = res
    })
  }

}
