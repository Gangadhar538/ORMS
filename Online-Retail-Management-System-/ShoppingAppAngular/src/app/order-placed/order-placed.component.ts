import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-placed',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.css',
  providers:[ProductService]
})
export class OrderPlacedComponent {

}
