import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from '../../services/restaurants.service';

import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.sass']
})
export class RestaurantsComponent implements OnInit {
  Restaurants: Restaurant[];
  constructor(public RestaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.RestaurantsService.getRestaurants().subscribe((restaurants) => {
        this.Restaurants = restaurants;
    });
  }
}
