import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

interface SubCategory {
  subCategoryId: number;
  subCategoryName: string;
  categoryId: number; // Adjust as needed
  // Add other subcategory properties here
}
@Component({
  selector: 'app-edit-sub-category',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  templateUrl: './edit-sub-category.component.html',
  styleUrl: './edit-sub-category.component.css',
  providers:[ProductService]
})
export class EditSubCategoryComponent implements OnInit{

  subCategoryId: any;
  subcategory: SubCategory = {} as SubCategory; // Initialize an empty subcategory object

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.subCategoryId = params['id'];
      if (this.subCategoryId) {
        this.fetchSubCategoryDetails(this.subCategoryId);
      }
    });
  }

  fetchSubCategoryDetails(subCategoryId: any): void {
    this.productService.getSubCategoryById(subCategoryId).subscribe(
      (subcategory: SubCategory) => {
        this.subcategory = subcategory; // Assign fetched subcategory to the local 'subcategory' object
      },
      (error) => {
        console.error('Error fetching subcategory details:', error);
      }
    );
  }

  updateSubCategory(): void {
    this.productService
      .updateSubCategory({
        subCategoryId: this.subCategoryId,
        subCategoryName: this.subcategory.subCategoryName,
        categoryId: this.subcategory.categoryId,
        // Add other properties you want to allow editing
      })
      .subscribe(
        (response) => {
          console.log('Subcategory updated successfully', response);
          alert('Subcategory updated successfully');
          this.router.navigate(['/AdminPanel']);
        },
        (error) => {
          console.error('Error updating subcategory:', error);
        }
      );
  }

}
