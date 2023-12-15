import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { NavbarComponent } from '../navbar/navbar.component';

interface Product {
  productId: number;
  subCategoryId: number;
  productName: string;
  productDescription: string;
  size: string;
  unitCost: number;
  imageData?: null;
}
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit {
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
  addToCart(): void {
    console.log(this.productId);
    this.router.navigate(['/shoppingCart', this.productId]);
  }
}
