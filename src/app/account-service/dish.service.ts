import { Injectable } from '@angular/core';
import { Dish } from '../account-component/dialogs/create-dish/model/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  panner = {name: "panner", price: 100 , image: "https://i.ytimg.com/vi/XMGKGR-l9gU/maxresdefault.jpg", category: "Indian Panner"};
  panner1 = {name: "panner1", price: 100 , image: "https://i.ytimg.com/vi/XMGKGR-l9gU/maxresdefault.jpg", category: "Indian Panner"};
  panner2 = {name: "panner2", price: 100 , image: "https://i.ytimg.com/vi/XMGKGR-l9gU/maxresdefault.jpg", category: "Indian Panner"};
  panner3 = {name: "panner3", price: 100 , image: "https://i.ytimg.com/vi/XMGKGR-l9gU/maxresdefault.jpg", category: "Indian Panner"};
  panner4 = {name: "panner4", price: 100 , image: "https://i.ytimg.com/vi/XMGKGR-l9gU/maxresdefault.jpg", category: "Indian Panner"};
  dishes: Dish[] = [this.panner,this.panner1,this.panner2,this.panner3,this.panner4]
  
}
