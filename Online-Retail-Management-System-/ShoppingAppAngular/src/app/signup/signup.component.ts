import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-signup',
  standalone: true,
 imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[ProductService]
})
export class SignupComponent {
  customers:any;
  customerName: string = '';
  email: string = '';
  password: string = '';
  deliveryAddress: string = '';
  phoneNumber:string ='';
  constructor(private productService: ProductService, private router: Router) 
  {
    this.productService.fetchCustomers().subscribe(customer => this.customers = customer)
  }
  onSubmit(formValues: any) {
    const signupData = {
      customerName: this.customerName,
      email: this.email,
      password: this.password,
      deliveryAddress: this.deliveryAddress,
      phoneNumber: this.phoneNumber,
    };
    const foundCustomer = this.customers.find((customer: any) => {
      return customer.email === formValues.email ;
    });
    if(foundCustomer)
    {
      alert('An account is already associated with this email');
      this.router.navigate(['/login']);
    }
    else{
    this.productService.signup(signupData).subscribe(
      (response) => {
        console.log('Signup successful', response);
        alert('Signup successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed', error);
        alert('Signup failed');
      }
    );
    }
  }

  

  
 
  // constructor(private http: HttpClient, private router: Router) {}

  // onSubmit() {
  //   const signupData = {
  //     customerName:this.customerName,
  //     email: this.email,
  //     password: this.password,
  //     deliveryAddress: this.deliveryAddress,
  //     phoneNumber:this.phoneNumber,
  //   };
 
  //   // Make a POST request to your backend signup endpoint
  //   this.http.post<any>('http://localhost:5009/api/Customers', signupData).subscribe(
  //     (response) => {
  //       // Handle successful signup
  //       console.log('Signup successful', response);
 
  //       // Set success notification
       
  //       alert('Signup successful');
  //       this.router.navigate(['/login']);
 
  //       // Redirect to another page if needed
        
  //     },
  //     (error) => {
  //       // Handle signup error
  //       console.error('Signup failed', error);
  //       alert('Signup failed');
  //       // Set error notification
       
  //     }
  //   );
  // }

}
