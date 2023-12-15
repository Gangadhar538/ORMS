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
interface shoppingCart
{
  indexId:number;
  cartId:number;
  dateCreated:any;
  quantity:number;
  productId:number;
}
@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,NavbarComponent],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css',
  providers:[ProductService]
})
export class ShoppingcartComponent implements OnInit {
  // product: any;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   // Retrieve the product passed as state from the route
  //   this.route.paramMap.subscribe(params => {
  //     this.product = window.history.state.product;
  //     console.log(this.product); // Use this selected product as needed
  //   });
  // }
  productId: any;
  product: Product = {} as Product; // Initialize an empty product object
  productsToCart:shoppingCart={} as shoppingCart;
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.productsToCart.productId=this.productId;
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
  placeOrder()
  {
    this.router.navigate(['/ordersuccess']);
  }
}
