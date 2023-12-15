import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]
})
export class AddProductComponent {
  subCategoryId: any;
  productName: any;
  productDescription: any;
  size: any;
  unitCost: any;
  imageData: any;

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(): void {
    const productDetails = {
      subCategoryId: this.subCategoryId,
      productName: this.productName,
      productDescription: this.productDescription,
      size: this.size,
      unitCost: this.unitCost,
      imageData: this.imageData
    };

    this.productService.postNewProduct(productDetails).subscribe(
      (response) => {
        console.log('Product added successfully');
        alert('Product added');
        this.router.navigate(['/AdminPanel']);
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
