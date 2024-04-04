import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent {
  BookCount:number = 1;
  BookTitle:string = "DumbBookToBuy";
  AuthorName:string = "Priyanshu Ginkal"
  Price:number = 1000;
  DiscountedPrice:number = 500;
  TotalBooksInWishlist: number = 2;
  CreatedAt:string = "04 April 2024";
}
