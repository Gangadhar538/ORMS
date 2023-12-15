
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { ModifyProductsComponent } from './modify-products/modify-products.component';
import { ModifySubcatergoryComponent } from './modify-subcatergory/modify-subcatergory.component';
import { ModifyCustomerComponent } from './modify-customer/modify-customer.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component:AdminloginComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'signup',component:SignupComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'products',component:ProductsComponent},
  {path:'shoppingCart/:id',component:ShoppingcartComponent},
  {path:'shoppingCart',component:ShoppingcartComponent},
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
  {path:'AdminPanel',component:AdminPanelComponent},
  {path:'addProduct',component:AddProductComponent},
 {path:'addCategory',component:AddCategoryComponent},
 {path:'addSubCategory',component:AddSubCategoryComponent},
 {path:'editProduct/:id',component:EditProductComponent},
 {path:'editCategory/:id',component:EditCategoryComponent},
 {path:'editSubCategory/:id',component:EditSubCategoryComponent},
 {path:'ordersuccess',component:OrderPlacedComponent},
 {path:'modifyCategory',component:ModifyCategoryComponent},
 {path:'modifyCustomer',component:ModifyCustomerComponent},
 {path:'modifySubCategory',component:ModifySubcatergoryComponent},
 {path:'modifyProducts',component:ModifyProductsComponent},
  // Add other routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
