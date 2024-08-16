import { cakes } from "./cake";

export class cartItem{
    static quantity: number;
    constructor(cake:cakes){
        this.cake=cake;
    }

    cake:cakes;
    quantity:number=1;
    get price():number{
        return this.cake.price*this.quantity;
    }
}