import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-add-sub-category',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,RouterModule],
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css',
  providers:[ProductService]
})
export class AddSubCategoryComponent {
  categoryId: any;
  subCategoryName: any;
  subCategoryDescription: any;

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(): void {
    const subCategoryDetails = {
      categoryId: this.categoryId,
      subCategoryName: this.subCategoryName,
      subCategoryDescription: this.subCategoryDescription
    };

    this.productService.postNewSubCategory(subCategoryDetails).subscribe(
      () => {
        console.log('SubCategory added successfully');
        alert('SubCategory added');
        this.router.navigate(['/AdminPanel']);
      },
      (error) => {
        console.error('Error adding subcategory:', error);
      }
    );
  }
}
