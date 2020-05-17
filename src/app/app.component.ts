import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, GoogleMap } from '@angular/google-maps';
import { Restaurant, Center } from './models/restaurant';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	@ViewChild(GoogleMap, { static: false }) map: GoogleMap
	@ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

	restaurants: Restaurant[];
	center: Center;
	zoom: 12; 
	markerContent: '';
	markers = [];
	location = {};


	ngOnInit() {
		this.center = {
			lat: 53,
			lng: 10,
		}
	}

	getLocations(marker) {
		this.location = {
			position: {
				lat: parseFloat(marker.location.lat),
				lng: parseFloat(marker.location.long),
			},
			title: marker.name,
		};
		return this.location;
	}


	emitDataToParentHandler(restaurants: Restaurant[]) {
		this.map = null;
		this.markers.length = 0;
		restaurants.forEach(element => {
			this.markers.push(this.getLocations(element));
		});
	}

	emitSingleDataToParentHandler(restaurant: Restaurant) {
		this.center = {
			lat: parseFloat(restaurant.location.lat),
			lng: parseFloat(restaurant.location.long)
		}
	}

	openInfo(marker, content) {
		this.markerContent = content;
		this.info.open(marker);
	}
}
