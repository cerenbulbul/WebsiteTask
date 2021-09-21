import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
// import {AgmCoreModule} from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { GoogleMapsModule } from '@angular/google-maps';

import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule} from '@angular/fire/compat'

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    GoogleMapsModule,
 
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyB6_e54XpVCFRIbTbnO_v5HfLZzJKhtHPE',
    //   libraries: ['places']
    // }),
    // MatGoogleMapsAutocompleteModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
