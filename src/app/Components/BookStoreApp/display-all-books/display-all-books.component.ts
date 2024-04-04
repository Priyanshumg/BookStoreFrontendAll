import { Component } from '@angular/core';
import { BookServiceService } from '../../../Services/bookService/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrl: './display-all-books.component.scss'
})
export class DisplayAllBooksComponent {
    bookArray:any;
    bookidparamater:any;
    constructor(private books:BookServiceService, private route:ActivatedRoute){
       this.onSubmit()
   }

   ngOnInit():void{
    this.bookidparamater= this.route.snapshot.paramMap.get('id');
    this.onSubmit()
  }

   onSubmit(){
    this.books.getAllbooks().subscribe((res:any)=>{
      console.log(res);
      this.bookArray=res.data;
    })
   }
   pricelowtoHigh(){
    this.books.sortBookInAcSC().subscribe((res:any)=>{
      console.log(res);
      this.bookArray=res.data;
    })
   }
   pricehightolow(){
    this.books.sortBookInDSC().subscribe((res:any)=>{
      console.log(res);
      this.bookArray=res.data;
    })
   }
   newestArrival(){
    this.books.newestArrival().subscribe((res:any)=>{
      console.log(res);
      this.bookArray=res.data;
    })
   }
  }
