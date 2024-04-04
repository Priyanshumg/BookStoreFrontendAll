import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BookServiceService } from '../../../../Services/bookService/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.scss'
})
export class BookViewComponent {
  book: any;
  bookidparamater:any;


  constructor(private books:BookServiceService,private route:ActivatedRoute){}


  ngOnInit():void{
    this.bookidparamater= this.route.snapshot.paramMap.get('id');
    this.onSubmit()
  }
  onSubmit(){
   //console.log(this.bookidparamater);

    this.books.GetbyId(this.bookidparamater).subscribe((res:any)=>{
      console.log(res);
      this.book=res.data;
    })
  }

}
