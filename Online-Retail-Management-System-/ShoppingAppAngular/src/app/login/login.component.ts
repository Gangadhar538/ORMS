import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthUserService } from '../auth-user.service';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[ProductService,AuthUserService]
})
export class LoginComponent{
  customers: any;
  email: any = '';
  password: any = '';

  constructor(private router: Router,private productService: ProductService,private authService: AuthUserService) 
  {
    this.productService.fetchCustomers().subscribe((customer) => (this.customers = customer));
  }


  validatePassword(password:any):void
      {
        
      }
  login(formValues: any) {
    if (this.customers) {
      const foundCustomer = this.customers.find((customer: any) => {
        return customer.email === formValues.email && customer.password === formValues.password;
      });
      

      if (formValues.email === null || formValues.password === null) {
        alert('Please enter email or password');
        this.router.navigate(['/login']);
      } else if (foundCustomer) {
        this.authService.login(true);
        alert('Login successful');
        this.router.navigate(['/products']);
      } else {
        alert('Login Failed: Incorrect email or password');
        this.router.navigate(['/login']);
      }
    } else {
      alert('Customers data not available');
    }
  }

  logout() {
    this.authService.logout();
    alert('Logged out successfully');
    this.router.navigate(['/login']);
  }


  // customers: any;
  // email: any = '';
  // password: any = '';
  // auth:boolean=false;

  // constructor(private router: Router, private productService: ProductService) 
  // {
  //   this.productService.fetchCustomers().subscribe(customer => this.customers = customer)
  // }
 
  // // ngOnInit(): void {
  // //   this.fetchData();
  // // }

  // // fetchData() {
  // //   this.productService.fetchCustomers().subscribe(data => {
  // //     console.log(data);
  // //     this.customers = data;
  // //   });
  // login(formValues: any) {
  //   if (this.customers) {
  //     const foundCustomer = this.customers.find((customer: any) => {
  //       return customer.email === formValues.email && customer.password === formValues.password;
  //     });
  //     if (formValues.email===null||formValues===null) {
  //       alert('Please enter email or password');
  //       this.router.navigate(['/login']);
  //     }
  //     else if (foundCustomer) {
  //       this.productService.login(true);
  //       alert('Login successful');
  //      // this.auth=true;
  //       this.router.navigate(['/products']);
  //     } else {
  //       alert('Login Failed: Incorrect email or password');
  //       this.router.navigate(['/login']);
  //     }
  //   } else {
  //     // Handle scenario when customers data is not available
  //     alert('Customers data not available');
  //   }
  // }
 // ==========================================================================================
  // login(formvalues: any) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].email === formvalues.email && this.customers[i].password === formvalues.password) {
  //       alert("Login successful");
  //       this.router.navigate(['/products']);
  //       return;
  //     }
  //   } 
  //   alert("Login Failed : Incorrect email or password");
  //   this.router.navigate(['/login']);
  // }
}
