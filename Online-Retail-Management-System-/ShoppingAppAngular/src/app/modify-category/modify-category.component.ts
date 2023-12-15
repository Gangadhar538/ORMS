import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

@Component({
  selector: 'app-modify-category',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  templateUrl: './modify-category.component.html',
  styleUrl: './modify-category.component.css',
  providers:[ProductService]
})
export class ModifyCategoryComponent implements OnInit{
  categories: any[];
  constructor(private router: Router, private productService: ProductService) {
    this.categories = [];
  }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.productService.fetchCategorys().subscribe(
      categories => this.categories = categories,
      error => console.error('Error fetching categories:', error)
    );
  }
  editCategory(categoryId: any): void {
    this.router.navigate(['/editCategory', categoryId]);
  }
  deleteCategoryFunc(categoryId: any): void {
    this.productService.deleteCategory(categoryId).subscribe(
      response => {
        console.log('Deleted category successfully', response);
        alert('Deleted category successfully');
        this.fetchData(); // Refresh data after deletion
      },
      error => console.error('Error deleting category:', error)
    );
  }

}
