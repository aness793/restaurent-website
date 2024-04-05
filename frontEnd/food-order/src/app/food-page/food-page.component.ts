import { Component, OnInit } from '@angular/core';
import { foodInfo } from '../shared/modules/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
food!:foodInfo ;
  constructor( private activatedroute:ActivatedRoute, private foodservice:FoodService , private cartService:CartService,
    private router:Router) {
    this.activatedroute.params.subscribe((params)=>{
      if(params['id'])
        this.food = this.foodservice.getFoodById(params['id']);
    }
    )    
   }

  ngOnInit(): void {
  }
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}
}
