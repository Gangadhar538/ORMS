import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers:[ProductService]
})
export class ForgotPasswordComponent {
  customers: any[] = [];
  email: string = '';

  constructor(private router: Router, private productService: ProductService) {
    this.productService.fetchCustomers().subscribe(customers => this.customers = customers);
  }

  reset(fpForm: any) {
    const enteredEmail = fpForm.email;
    const foundCustomer = this.customers.find(customer => customer.email === enteredEmail);

    if (foundCustomer) {
      // Simulate sending an email with reset link
      // Replace this with actual logic to send reset link
      alert("A link has been sent to your email address to reset your password");
      this.router.navigate(['/login']);
    } else {
      alert("Wrong email or no account available with this email");
      this.router.navigate(['/forgotPassword']);
    }
  }
}