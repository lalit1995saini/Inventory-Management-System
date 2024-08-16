import { Component,OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { cartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;

 constructor( private cartService: CartService){
  this.setCart();
 }
 
  ngOnInit(): void {
  }
  setCart(){
    this.cart= this.cartService.getCart();
  }
  removeFromCart(cartItem:cartItem){
    this.cartService.removeFromCart(cartItem.cake.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.cake.id,quantity);
    this.setCart();
  }
}
