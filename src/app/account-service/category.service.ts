import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categories: string[] = ['Indian Panner', 'Indian Dal', 'India Mix Veg', 'Chinese', 'Itelian'];
  selectedCategory = this.categories[0];
}
