import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaybooktemplate',
  templateUrl: './displaybooktemplate.component.html',
  styleUrl: './displaybooktemplate.component.scss'
})
export class DisplaybooktemplateComponent {

  @Input() bookList:any;
  constructor(public router:Router){}
  singlebook(bookId:number){
    console.log("single book click");
    this.router.navigate(["/dashboard/bookview",bookId]);
  }
}
