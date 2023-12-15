import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  providers:[ProductService]
})
export class AdminPanelComponent{
  //customers: any[];
 // categories: any[];
  // subCategories: any[];
  // products :any[];

  constructor() {
    //private router: Router, private productService: ProductService
    //this.customers = [];
    //this.categories = [];
    //this.subCategories=[];
    //this.products=[];
  }

  // ngOnInit(): void {
  //   this.fetchData();
  // }

  // fetchData(): void {
    // this.productService.fetchCustomers().subscribe(
    //   customers => this.customers = customers,
    //   error => console.error('Error fetching customers:', error)
    // );

    // this.productService.fetchCategorys().subscribe(
    //   categories => this.categories = categories,
    //   error => console.error('Error fetching categories:', error)
    // );
    // this.productService.fetchSubCategorys().subscribe(
    //   subCategories => this.subCategories = subCategories,
    //   error => console.error('Error fetching subcategories:', error)
    // );
    // this.productService.fetchProducts().subscribe(
    //   products => this.products = products,
    //   error => console.error('Error fetching products:', error)
    // );
  }

  
  // editProduct(productId: any): void {
  //   this.router.navigate(['/editProduct', productId]);
  // }

  // editCategory(categoryId: any): void {
  //   this.router.navigate(['/editCategory', categoryId]);
  // }
  // editSubCategory(subCategoryId: any): void {
  //   this.router.navigate(['/editSubCategory', subCategoryId]);
  // }

  // deleteCustomerFunc(customerId: any): void {
  //   this.productService.deleteCustomer(customerId).subscribe(
  //     response => {
  //       console.log('Deleted successfully', response);
  //       alert('Deleted customer successfully');
  //       this.fetchData(); // Refresh data after deletion
  //     },
  //     error => console.error('Error deleting customer:', error)
  //   );
  // }

  // deleteCategoryFunc(categoryId: any): void {
  //   this.productService.deleteCategory(categoryId).subscribe(
  //     response => {
  //       console.log('Deleted category successfully', response);
  //       alert('Deleted category successfully');
  //       this.fetchData(); // Refresh data after deletion
  //     },
  //     error => console.error('Error deleting category:', error)
  //   );
  // }

  // deleteSubCategoryFunc(subCategoryId: any): void {
  //   this.productService.deleteSubCategory(subCategoryId).subscribe(
  //     response => {
  //       console.log('Deleted subcategory successfully', response);
  //       alert('Deleted subcategory successfully');
  //       this.fetchData(); // Refresh data after deletion
  //     },
  //     error => {alert('Error deleting subcategory:');console.error('Error deleting subcategory:', error)}
  //   );
  // }
  // deleteProductFunc(productId: any): void {
  //   this.productService.deleteProduct(productId).subscribe(
  //     response => {
  //       console.log('Deleted product successfully', response);
  //       alert('Deleted product successfully');
  //       this.fetchData(); // Refresh data after deletion
  //     },
  //     error => console.error('Error deleting product:', error)
  //   );
  // }
  // customers: any[] = [];
  // categories: any[] = [];

  // constructor(private router: Router, private service: ProductService) {}

  // ngOnInit(): void {
  //   this.fetchData();
  // }

  // fetchData(): void {
  //   this.service.fetchCustomers().subscribe(
  //     customers => this.customers = customers,
  //     error => console.error('Error fetching customers:', error)
  //   );

  //   this.service.fetchCategorys().subscribe(
  //     categories => this.categories = categories,
  //     error => console.error('Error fetching categories:', error)
  //   );
  // }

  // edit(): void {
  //   this.router.navigate(['/editpizza']);
  // }

  // deleteCustomerFunc(customerId: any): void {
  //   this.service.deleteCustomer(customerId).subscribe(
  //     response => {
  //       console.log('Deleted successfully', response);
  //       alert('Deleted customer successfully');
  //       this.fetchData(); // Refresh data after deletion
  //     },
  //     error => console.error('Error deleting customer:', error)
  //   );
  // }

  // deleteCategory(): void {
  //   this.router.navigate(['/editpizza']);
  // }

  // add(): void {
  //   this.router.navigate(['/addtopizzalist']);
  // }
  //==================================================================================================================
  // customers:any;
  // categories:any;
  // constructor(private router: Router, private service: ProductService) {
  //   this.service.fetchCustomers().subscribe(customer => this.customers = customer)
  //   this.service.fetchCategorys().subscribe(category => this.categories = category)
  // }
  // edit(){
  //   this.router.navigate(['/editpizza']);
  // }
  // deleteCustomerFunc(customerId :any):void{
  //   this.service.deleteCustomer(customerId).subscribe((response) => {
  //     console.log('Deleted successfully', response);
  //     alert('Deleted customer successfully');
  //     this.router.navigate(['/AdminPanel']);
  //   },
  //   (error)=>{ console.error('Error deleting customer:', error)}
  //   );
  // }

  // deleteCategory(): void{
  //   this.router.navigate(['/editpizza']);
  // }

  // add(){
  //   this.router.navigate(['/addtopizzalist']);
  // }

