import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';

// import { CustomerComponent } from './customer/customer.component';
// import { CategoryComponent } from './category/category.component';
// import { OrderComponent } from './order/order.component';
// import { OrderDerailsComponent } from './order-derails/order-derails.component';
// import { ProductsComponent } from './products/products.component';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [

  {path:'homepage',component:HomepageComponent},
   {path:'login',component:LoginComponent},
   {path:'adminlogin',component:AdminloginComponent},
   {path:'navbar',component:NavbarComponent},
   {path:'shoppingCart',component:ShoppingcartComponent},
 {path:'products',component:ProductsComponent},
 {path:'signup',component:SignupComponent},
 {path:'forgotPassword',component:ForgotPasswordComponent},
 {path:'ProductDetails',component:ProductsComponent},
 {path:'AdminPanel',component:AdminPanelComponent},
 {path:'addProduct',component:AddProductComponent},
 {path:'addCategory',component:AddCategoryComponent},
 {path:'addSubCategory',component:AddSubCategoryComponent},
 {path:'editProduct/:id',component:EditProductComponent},
 {path:'editCategory/:id',component:EditCategoryComponent},
 {path:'editSubCategory/:id',component:EditSubCategoryComponent},
  {path: '', redirectTo: '/homePage', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
