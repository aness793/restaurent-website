
import { foodInfo } from "./Food";

export class CartItem {
   
    constructor(food:foodInfo){
        this.food =food;
    }
    food:foodInfo ;
    quantity: number =1;
    get price ():number{
        return this.food.price * this.quantity;
    }
}
