import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductService]
})

export class ProductsComponent{
  products: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(product => this.products = product);
  }

  viewProductDetails(productId: any): void {
    this.router.navigate(['/ProductDetails', productId]);
  }
}

//this.router.navigate(['/ProductDetails'], { state: { product: selectedProduct } })