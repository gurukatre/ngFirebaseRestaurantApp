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

}
