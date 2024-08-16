import { Component,OnInit } from '@angular/core';
import { cakes } from '../shared/models/cake';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../services/cake/cake.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  cake!:cakes;

  constructor(private activatedRoute: ActivatedRoute, private cakeService: CakeService, private cartService: CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.cake = cakeService.getCakeById(params['id'])
    })
  }
  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.cake);
    this.router.navigateByUrl('/cart-page')
  }
  
}
