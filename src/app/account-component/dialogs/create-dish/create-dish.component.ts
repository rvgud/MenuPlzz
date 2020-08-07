import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../account-service/dish.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dish } from './model/dish';
import { AccountComponentComponent } from '../../account-component.component';
import { CategoryService } from 'src/app/account-service/category.service';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent{
  
  constructor(
    public dialogRef: MatDialogRef<CreateDishComponent> , public dishService: DishService  , public category: CategoryService) {};
    newDish: Dish = {
      name: "",
      price: 0,
      image: "",
      category: this.category.selectedCategory
    };
  onNoClick(): void {
    this.dialogRef.close();
  }
  public addNewDish() {
    this.dishService.dishes.push(this.newDish);
  }
}
