import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,HttpClientModule],
  providers:[ProductService],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent{
  admins:any
  email:any='';
  password:any='';
  flag:boolean=true;
  mouseoverLogin:boolean=true;
  constructor(private router:Router,private ProductService:ProductService)
  {
    this.ProductService.fetchAdmins().subscribe(data =>this.admins=data)
  }

  // adminlogin(formvalues: any) {
  //   for (let i = 0; i < this.admins.length; i++) {
  //     if (this.admins[i].email === formvalues.email && this.admins[i].password === formvalues.password) {
  //       console.log("login successfull");
  //       alert("Login successful");
  //       this.router.navigate(['/homepage']);
  //       return;
  //     }
  //   }
  //   console.log("Login Failed");
  //   alert("Login Failed : Incorrect email or password");
  //   this.router.navigate(['/adminlogin']);
  // }
  adminlogin(formValues: any) {
    if (this.admins) {
      const foundAdmin = this.admins.find((admin: any) => {
        return admin.email === formValues.email && admin.password === formValues.password;
      });

      if (foundAdmin) {
        alert('Login successful');
        this.router.navigate(['/AdminPanel']);
      } else {
        alert('Login Failed: Incorrect email or password');
        this.router.navigate(['/adminlogin']);
      }
    } else {
      // Handle scenario when admins data is not available
      alert('Admin data not available');
    }
  }
 
}
// adminlogin(adminloginForm:any)
// {
//   for (let i = 0; i < this.admins.length; i++)
//   {
//     if(this.admins[i].email === adminloginForm.email && this.admins[i].password === adminloginForm.password)
//     {
//       alert("Login successful");
//       this.router.navigate(['/homepage']);
//       this.flag=true;
//       break
//     }
//     else
//     {
//       this.flag=false;
//     }
//   }
//   if(this.flag==false){
//       alert("Login Failed : Incorrect name or password");
//       this.router.navigate(['/adminlogin']);
//   }
// }
//=============================================================
// name: string = '';
// password: string = '';
// errorMessage: string = '';

// constructor(private router: Router) {}

// adminlogin(adminloginForm:any) {
//   console.log('Attempting login with:', this.name, this.password);
//   this.name=adminloginForm.name;
//   this.password=adminloginForm.password;
//   // Your authentication logic goes here
  
//   if (this.name === 'admin1' && this.password === 'adminpass1') {
//     console.log('Login successful');
//     this.router.navigate(['/homepage']);
//   } else {
//     alert("Login Failed : Incorrect email or password");
//     this.router.navigate(['/adminlogin']);[]
//   }
// }
//===================================================
  // ngOnInit(): void {
  //   this.fetchData();
  // }
  // fetchData()
  // {
  //   this.ProductService.fetchAdmins().subscribe(data => {console.log(data);this.admins=data})
  // }