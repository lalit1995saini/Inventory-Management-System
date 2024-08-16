import { Injectable } from '@angular/core';
import { cakes } from 'src/app/shared/models/cake';
import { tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor() { }

  getCakeById(id:number): cakes{
    return this.getAll().find(cake => cake.id == id)!;
  }

  getAllCakeByTag(tag: string): cakes[] {
    if(tag== 'All')
    return this.getAll()
    else
    return this.getAll().filter(cake=> cake.tags?.includes(tag));
    // return tag == 'All' ?
    //   this.getAll() : this.getAll().filter(cake => cake.tags?.includes(tag));

  }

  getAllTag():tag[]{
    return[
      {name:'All', count:18},
      {name:'FastFood', count:10},
      {name:'Breakfast', count:9},
      {name:'Lunch', count:9},
      {name:'Dinner', count:8},
      {name:'SlowFood', count:7},

    ]
  }

  getAll(): cakes[] {
    return [
      {
        id: 1,
        name: 'Berries Summer Cupcakes',
        price: 20,
        cookTime: '40-50',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Berries Summer Cupcakes.jpg',
        tags: ['Breakfast,FastFood,Lunch'],
      },
      {
        id: 2,
        name: 'Brownies Different Flavor',
        price: 50,
        cookTime: '50-60',
        favorite: false,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/images/Brownies Different Flavor.jpg',
        tags: ['Breakfast,FastFood,Lunch'],
      },
      {
        id: 3,
        name: 'Butter Cookies',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Butter Cookies.jpg',
        tags: ['Breakfast,Lunch'],
      },
      {
        id: 4,
        name: 'Cherry Jelly Cheesecake',
        price: 30,
        cookTime: '20-30',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Cherry Jelly Cheesecake.jpg',
        tags: ['Dinner,SlowFood'],
      },
      {
        id: 5,
        name: 'Chocolate Blueberries Cake',
        price: 40,
        cookTime: '20-30',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Chocolate Blueberries Cake.jpg',
        tags: ['FastFood,Lunch,Dinner,SlowFood'],
      },
      {
        id: 6,
        name: 'Chocolate Bonbons',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Chocolate Bonbons.jpg',
        tags: ['FastFood,Lunch'],
      },
      {
        id: 7,
        name: 'Chocolate Cookies',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Chocolate Cookies.jpg',
        tags: ['Breakfast'],
      },
      {
        id: 8,
        name: 'Chocolate Cupcake',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Chocolate Cupcake.jpg',
        tags: ['Lunch,Dinner'],
      },
      {
        id: 9,
        name: 'Chocolate Summer Berries',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Chocolate Summer Berries.jpg',
        tags: ['FastFood'],
      },
      {
        id: 10,
        name: 'Classic Cheesecake',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Classic Cheesecake.jpg',
        tags: ['Lunch,Dinner,SlowFood'],
      },
      {
        id: 11,
        name: 'Cookies Cream Cake',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Cookies Cream Cake.jpg',
        tags: ['Breakfast,FastFood,SlowFood'],
      },
      {
        id: 12,
        name: 'Easter Cupcakes',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Easter Cupcakes.jpg',
        tags: ['Breakfast,FastFood,'],
      },
      {
        id: 13,
        name: 'Fruit Cake',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Fruit Cake.jpg',
        tags: ['Lunch,Dinner'],
      },
      {
        id: 14,
        name: 'Isometric chocolate brownies',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Isometric chocolate brownies.jpg',
        tags: ['Dinner,SlowFood'],
      },
      {
        id: 15,
        name: 'Monster Theme Cake',
        price: 20,
        cookTime: '30-40',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Monster Theme Cake.jpg',
        tags: ['Dinner,SlowFood'],
      },
      {
        id: 16,
        name: 'Muffin Devil Horns',
        price: 30,
        cookTime: '30-40',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Muffin Devil Horns.jpg',
        tags: ['Breakfast,FastFood'],
      },
      {
        id: 17,
        name: 'Muffin Ghost',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Muffin Ghost.jpg',
        tags: ['Breakfast,FastFood'],
      },
      {
        id: 18,
        name: 'Pumpkin Spice Cupcakes',
        price: 30,
        cookTime: '20-30',
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/images/Pumpkin Spice Cupcakes.jpg',
        tags: ['Breakfast,FastFood,Lunch,Dinner,SlowFood'],
      },
    ]
  }
}
