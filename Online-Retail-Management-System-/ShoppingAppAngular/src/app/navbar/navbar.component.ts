import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthUserService } from '../auth-user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[ProductService,AuthUserService]
})
export class NavbarComponent {
  
  constructor(public authService: AuthUserService,private router:Router ) {}
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.router?.navigate(['/homepage']);
    // Additional logic like redirecting to a specific page
  }

  
  // loggedIn: boolean = false; // Check if user is logged in
  // username: string = ''; // Store logged-in username

  // // Logic to check if the user is logged in
  // // This could be triggered after a successful login
  // checkLoginStatus() {
  //   if () {
  //     this.loggedIn = true;
  //     this.username = "User";
  //   } else {
  //     this.loggedIn = false;
  //     this.username = '';
  //   }
  // }

  // // Function to log the user out
  // logout() {
  //   // Perform logout logic here
  //   this.loggedIn = false;
  //   this.username = '';
  //   // Other logout actions
  // }

}
