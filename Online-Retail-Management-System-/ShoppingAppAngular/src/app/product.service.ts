import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private customerUrl='https://apionlineretailmanagementsystem.azurewebsites.net/api/Customers';
  private categoryUrl='https://apionlineretailmanagementsystem.azurewebsites.net/api/Categorys';
  private adminUrl='https://apionlineretailmanagementsystem.azurewebsites.net/api/Admins';
  private productUrl='https://apionlineretailmanagementsystem.azurewebsites.net/api/Products';
  private subCategoryUrl='https://apionlineretailmanagementsystem.azurewebsites.net/api/SubCategorys';
  private shoppingCartUrl='https://apionlineretailmanagementsystem.azurewebsites.net/api/ShoppingCarts';
  
  
  constructor(private httpClient: HttpClient) {}
 
  signup(signupData: any): Observable<any> {
    return this.httpClient.post<any>(this.customerUrl, signupData);
  }
  fetchProducts(): Observable<any> {
    return this.httpClient.get(this.productUrl)
    //this.httpClient.get('http://localhost:5009/api/Customers').subscribe(data => {console.log(data);this.arr=data})
  }
  fetchCustomers(): Observable<any>{
    return this.httpClient.get<any[]>(this.customerUrl)
  }
  fetchAdmins(): Observable<any>
  {
    return this.httpClient.get<any[]>(this.adminUrl)
  }
  fetchCategorys(): Observable<any>
  {
    return this.httpClient.get<any[]>(this.categoryUrl)
  }
  fetchSubCategorys(): Observable<any>
  {
    return this.httpClient.get<any[]>(this.subCategoryUrl)
  }
  deleteCustomer(customerId: any): Observable<any> {
    const deleteUrl = `${this.customerUrl}/${customerId}`; // Properly concatenate the URL
    return this.httpClient.delete<any>(deleteUrl);
  }
  deleteCategory(categoryId: any): Observable<any> {
    const deleteUrl = `${this.categoryUrl}/${categoryId}`;
    return this.httpClient.delete<any>(deleteUrl);
  }

  deleteSubCategory(subCategoryId: any): Observable<any> {
    const deleteUrl = `${this.subCategoryUrl}/${subCategoryId}`;
    return this.httpClient.delete<any>(deleteUrl);
  }
  deleteProduct(productId: any): Observable<any> {
    const deleteUrl = `${this.productUrl}/${productId}`;
    return this.httpClient.delete<any>(deleteUrl);
  }
  postNewProduct(productDetails: any): Observable<any> {
    return this.httpClient.post<any>(`${this.productUrl}`, productDetails);
  }
  postNewshoppingCart(productDetails: any): Observable<any> {
    return this.httpClient.post<any>(`${this.shoppingCartUrl}`, productDetails);
  }
  postNewCategory(categoryDetails: any): Observable<any> {
    return this.httpClient.post<any>(`${this.categoryUrl}`, categoryDetails);
  }

  postNewSubCategory(subCategoryDetails: any): Observable<any> {
    return this.httpClient.post<any>(`${this.subCategoryUrl}`, subCategoryDetails);
  }
  getProductById(productId: any): Observable<any> {
    const url = `${this.productUrl}/${productId}`;
    return this.httpClient.get(url);
  }

  updateProduct(updatedProduct: any): Observable<any> {
    const url = `${this.productUrl}/${updatedProduct.productId}`;
    return this.httpClient.put(url, updatedProduct);
  }
  getCategoryById(categoryId: any): Observable<any> {
    const url = `${this.categoryUrl}/${categoryId}`;
    return this.httpClient.get(url);
  }

  updateCategory(updatedCategory: any): Observable<any> {
    const url = `${this.categoryUrl}/${updatedCategory.categoryId}`;
    return this.httpClient.put(url, updatedCategory);
  }
  getSubCategoryById(subCategoryId: any): Observable<any> {
    const url = `${this.subCategoryUrl}/${subCategoryId}`;
    return this.httpClient.get(url);
  }

// Add this method to your ProductService class
updateSubCategory(updatedSubCategory: any): Observable<any> {
  const url = `${this.subCategoryUrl}/${updatedSubCategory.subCategoryId}`;
  return this.httpClient.put(url, updatedSubCategory);
}
  // deleteCustomer(customerId:any):Observable<any>{
  //   return this.httpClient.delete<any>(`${this.customerUrl}${customerId}`,customerId);
  // }
}

