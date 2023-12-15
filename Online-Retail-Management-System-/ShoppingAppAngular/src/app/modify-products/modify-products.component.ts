import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

@Component({
  selector: 'app-modify-products',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  providers:[ProductService],
  templateUrl: './modify-products.component.html',
  styleUrl: './modify-products.component.css'
})
export class ModifyProductsComponent implements OnInit {
  products :any[];
  constructor(private router: Router, private productService: ProductService) {
    this.products=[];
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productService.fetchProducts().subscribe(
      products => this.products = products,
      error => console.error('Error fetching products:', error)
    );
  }
  editProduct(productId: any): void {
    this.router.navigate(['/editProduct', productId]);
  }
  deleteProductFunc(productId: any): void {
    this.productService.deleteProduct(productId).subscribe(
      response => {
        console.log('Deleted product successfully', response);
        alert('Deleted product successfully');
        this.fetchData(); // Refresh data after deletion
      },
      error => console.error('Error deleting product:', error)
    );
  }
}
