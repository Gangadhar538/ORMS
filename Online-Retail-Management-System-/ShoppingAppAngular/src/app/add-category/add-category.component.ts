import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,RouterModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
  providers:[ProductService]
})
export class AddCategoryComponent {
  categoryName: any;
  

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(): void {
    const categoryDetails = {
      categoryName: this.categoryName,
    };

    this.productService.postNewCategory(categoryDetails).subscribe(
      () => {
        console.log('Category added successfully');
        alert('Category added');
        this.router.navigate(['/AdminPanel']);
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }
}
