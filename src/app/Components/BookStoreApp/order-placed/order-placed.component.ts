import { Component } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.scss'
})

export class OrderPlacedComponent {
  displayedColumns: string[] = ['EmailUs', 'ContactUs', 'Address'];
  dataSource = ELEMENT_DATA;
  OrderID:number = 19
}

export interface PeriodicElement {
  EmailUs: string;
  ContactUs: string;
  Address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    EmailUs: 'admin@bookstore.com',
    ContactUs: '9897867867',
    Address: 'SRM Institute of Science and Technology, Kattankulathur, 603203, Chennai TamilNadu, India'}
];



