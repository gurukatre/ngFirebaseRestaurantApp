import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RestaurantsService } from '../../services/restaurants.service';

import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.sass']
})
export class RestaurantsComponent implements OnInit {
  @Output() emitDataToParent = new EventEmitter<Restaurant[]>();
  @Output() emitSingleDataToParent = new EventEmitter<Restaurant>();
  Restaurants: Restaurant[];
  editState: boolean = false;
  restaurantToEdit: Restaurant;
  constructor(public RestaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.RestaurantsService.getRestaurants().subscribe((restaurants) => {
        this.Restaurants = restaurants;
        this.emitDataToParent.emit(restaurants);
    });
  }

  openInfo(restaurant): void {
    this.emitSingleDataToParent.emit(restaurant);
  }

  truncateString(str) {
		// replace new line with space
		if (str) {
			str = str.replace(/(?:\\r\\n|\\r|\\n)/g, ' ');
			if (str.length <= 100) {
				return str;
			}
			// Return str truncated with '...' concatenated to the end of str.
			return str.slice(0, 100) + '...'
		}
	}

  deleteRestaurant(event, restaurant) {
    this.RestaurantsService.deleteRestaurant(restaurant);
  }

  editRestaurant(event, restaurant) {
    this.editState = true;
    this.restaurantToEdit = restaurant;
  }

  updateRestaurant(restaurant) {
    this.RestaurantsService.updateRestaurant(restaurant);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.restaurantToEdit = null;
  }

}
