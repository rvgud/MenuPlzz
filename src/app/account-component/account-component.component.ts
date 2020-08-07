import { Component, OnInit, Input } from '@angular/core';
import { Dish } from './dialogs/create-dish/model/dish';
import {MatDialog} from '@angular/material/dialog';
import { CreateCategoryComponent} from './dialogs/create-category/create-category.component'
import { CategoryService } from '../account-service/category.service';
import { DishService } from '../account-service/dish.service';
import { CreateDishComponent } from './dialogs/create-dish/create-dish.component';

@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.css']
})
export class AccountComponentComponent implements OnInit {
  constructor(public dialog: MatDialog , public categoryService: CategoryService ,public dishService: DishService) { }
  categories = this.categoryService.categories;
  ngOnInit(): void {
  }
  onSelection(e, v) {
    this.categoryService.selectedCategory = e.option.value;
 }
 openDialogCategory() {
  this.dialog.open(CreateCategoryComponent);
 }
 openDialogDish() {
  this.dialog.open(CreateDishComponent);
 }
 dishes = this.dishService.dishes;
}