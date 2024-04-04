import { Component } from '@angular/core';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrl: './my-wish-list.component.scss'
})
export class MyWishListComponent {
  BookCount:number = 1;
  BookTitle:string = "DumbBookToBuy";
  AuthorName:string = "Priyanshu Ginkal"
  Price:number = 1000
  DiscountedPrice:number = 500
  TotalBooksInWishlist: number = 2
}
