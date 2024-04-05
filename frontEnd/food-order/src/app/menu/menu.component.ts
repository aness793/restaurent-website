import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foodInfo } from '../shared/modules/Food';
import {ActivatedRoute, Router} from '@angular/router'
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
food!:foodInfo
toolong = true ;
Foods:foodInfo[]=[]
  constructor(private activatedroute:ActivatedRoute, private foodservice:FoodService , private cartservice:CartService,private foodService:FoodService, private route:ActivatedRoute,private router:Router) 
  {
    this.activatedroute.params.subscribe((params)=>{
      if(params['id'])
        this.food = this.foodservice.getFoodById(params['id']);
    }
    )    
   }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
    if (params['searchTerm'])
      this.Foods = this.foodService.getAll().filter(ele => 
        ele.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
    else if (params['tag'])
        this.Foods = this.foodService.getAllFoodsByTag(params['tag'])
    else
      this.Foods = this.foodService.getAll();
    })
   
  
  }
  AddToCart(){
    this.cartservice.addToCart(this.food);
  }
}