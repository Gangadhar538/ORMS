import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

@Component({
  selector: 'app-modify-subcatergory',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule,AdminPanelComponent],
  providers:[ProductService],
  templateUrl: './modify-subcatergory.component.html',
  styleUrl: './modify-subcatergory.component.css'
})
export class ModifySubcatergoryComponent implements OnInit{

  subCategories: any[];
  constructor(private router: Router, private productService: ProductService) {
    //this.customers = [];
    //this.categories = [];
    this.subCategories=[];
    //this.products=[];
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productService.fetchSubCategorys().subscribe(
      subCategories => this.subCategories = subCategories,
      error => console.error('Error fetching subcategories:', error)
    );
  }
  deleteSubCategoryFunc(subCategoryId: any): void {
    this.productService.deleteSubCategory(subCategoryId).subscribe(
      response => {
        console.log('Deleted subcategory successfully', response);
        alert('Deleted subcategory successfully');
        this.fetchData(); // Refresh data after deletion
      },
      error => {alert('Error deleting subcategory:');console.error('Error deleting subcategory:', error)}
    );
  }
  editSubCategory(subCategoryId: any): void {
    this.router.navigate(['/editSubCategory', subCategoryId]);
  }
}
