import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

import { RestaurantsService } from './services/restaurants.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NavbarComponent,
    AddRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
