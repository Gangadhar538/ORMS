import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

@Component({
  selector: 'app-modify-customer',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  providers:[ProductService],
  templateUrl: './modify-customer.component.html',
  styleUrl: './modify-customer.component.css'
})
export class ModifyCustomerComponent implements OnInit{
  customers: any[];
  constructor(private router: Router, private productService: ProductService) {
    this.customers = [];
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productService.fetchCustomers().subscribe(
      customers => this.customers = customers,
      error => console.error('Error fetching customers:', error)
    );
  }
  deleteCustomerFunc(customerId: any): void {
    this.productService.deleteCustomer(customerId).subscribe(
      response => {
        console.log('Deleted successfully', response);
        alert('Deleted customer successfully');
        this.fetchData(); // Refresh data after deletion
      },
      error => console.error('Error deleting customer:', error)
    );
  }


}
