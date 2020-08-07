import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { CategoryService } from 'src/app/account-service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponent> , public categoryService: CategoryService) {}
  newCategory: string;
  onNoClick(): void {
    this.dialogRef.close();
  }
  addNewCategory() {
    console.log(this.newCategory);
    this.categoryService.categories.push(this.newCategory);
  }
}
