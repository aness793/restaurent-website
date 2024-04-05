import { R3BoundTarget } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/modules/Cart';
import { CartItem } from 'src/app/shared/modules/CartItem';
import { foodInfo } from 'src/app/shared/modules/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart()

  addToCart(food:foodInfo):void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id , cartItem.quantity + 1)
      return;
      }  
    this.cart.items.push(new CartItem(food))

      

  
 
  }
  
  removeFromCart(foodId:number):void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
   
  }
  changeQuantity(foodId:number , quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return ;
    cartItem.quantity = quantity ;
  }
  getCart(){
    return this.cart ;
  }
}
