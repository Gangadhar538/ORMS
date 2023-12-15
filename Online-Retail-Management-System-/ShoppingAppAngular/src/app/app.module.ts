import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Add this line
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,HttpClientModule], // Add ReactiveFormsModule here
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}

