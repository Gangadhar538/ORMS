import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

interface Product {
  productId: number;
  subCategoryId:number;
  productName: string;
  productDescription: string;
  size: string;
  unitCost: number;
  imageData: string;
}
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
  providers:[ProductService]
})


export class EditProductComponent implements OnInit{
  productId: any;
  product: Product = {} as Product; // Initialize an empty product object

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.fetchProductDetails(this.productId);
      }
    });
  }

  fetchProductDetails(productId: any): void {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product; // Assign fetched product to the local 'product' object
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  updateProduct(): void {
    // Call your ProductService's updateProduct method with only the properties to be updated
    this.productService.updateProduct({
      productId: this.productId,
      productName: this.product.productName,
      subCategoryId:this.product.subCategoryId,
      productDescription:this.product.productDescription,
      size: this.product.size,
      unitCost: this.product.unitCost,
      imageData:this.product.imageData
      // Add other properties you want to allow editing
    }).subscribe(
      response => {
        console.log('Product updated successfully', response);
        alert('Product updated successfully');
        this.router.navigate(['/AdminPanel']);
      },
      error => {
        console.error('Error updating product:', error);
      }
    );
  }

  // productId: any;
  // // Rest of your component code...
  

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.productId = params['id'];
  //     if (this.productId) {
  //       this.fetchProductDetails(this.productId);
  //     }
  //   });
  // }

  // fetchProductDetails(productId: any): void {
  //   // Call your ProductService to fetch product details by productId
  //   // Same logic as previously shown in the other response
  // }

}
