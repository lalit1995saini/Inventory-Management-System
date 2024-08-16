import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { cartItem } from '../shared/models/cartItem';
import { cakes } from '../shared/models/cake';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  addToCart(cake:cakes):void{
    let cartItem = this.cart.items.find(item=> item.cake.id ===cake.id)
    if (cartItem){
      this.changeQuantity(cake.id, cartItem.quantity +1)
      return;
    }
    // this.cart.items.push(new cartItem(cake));
  }
  removeFromCart(cakeId:number):void{
    this.cart.items = this.cart.items.filter(item=>item.cake.id !=cakeId)
  }
  changeQuantity(quantity:number, cakeId:number){
    let cartItem = this.cart.items.find(item=> item.cake.id ===cakeId)
    if(!cartItem) return;
    cartItem.quantity = quantity; 
  }
  getCart():Cart{
    return this.cart;
  }
}
