import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

interface Category {
  categoryId: number;
  categoryName: string;
}
@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
  providers:[ProductService]
})
export class EditCategoryComponent implements OnInit {
  categoryId: any;
  category: Category = {} as Category;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      if (this.categoryId) {
        this.fetchCategoryDetails(this.categoryId);
      }
    });
  }

  fetchCategoryDetails(categoryId: any): void {
    this.productService.getCategoryById(categoryId).subscribe(
      (category: Category) => {
        this.category = category;
      },
      (error) => {
        console.error('Error fetching category details:', error);
      }
    );
  }

  updateCategory(): void {
    this.productService.updateCategory({
      categoryId: this.categoryId,
      categoryName: this.category.categoryName,
      // Add other properties you want to allow editing
    }).subscribe(
      response => {
        console.log('Category updated successfully', response);
        alert('Category updated successfully');
        this.router.navigate(['/AdminPanel']); // Navigate to wherever needed
      },
      error => {
        console.error('Error updating category:', error);
      }
    );
  }
}
