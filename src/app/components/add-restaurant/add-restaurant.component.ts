import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.sass']
})
export class AddRestaurantComponent implements OnInit {
  restaurant: Restaurant = {
    name: '',
    description: '',
    logo: '',
    location: {
      lat: 53,
      long: 10
    }
  }
  addRestaurantState: boolean = false;
  constructor(private RestaurantsService: RestaurantsService) { }

  ngOnInit(): void {
  }

  addRestaurantForm(){
    this.addRestaurantState = true;
  }

  closeRestaurantForm(){
    this.addRestaurantState = false;
  }

  onSubmit(){
    this.RestaurantsService.addRestaurant(this.restaurant);
    this.restaurant.name = '';
    this.restaurant.description = '';
    this.restaurant.logo = '';
    this.restaurant.location.lat = 0;
    this.restaurant.location.long = 0;
    this.closeRestaurantForm();
  }
}
