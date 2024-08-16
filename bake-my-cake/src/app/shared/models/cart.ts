import { cartItem } from "./cartItem";

export class Cart{
    items:cartItem[]=[];

    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(items => {
            totalPrice +=items.price;
        });
        return totalPrice;
    }
}