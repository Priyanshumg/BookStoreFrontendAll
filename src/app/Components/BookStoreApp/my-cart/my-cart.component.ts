import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.scss'
})
export class MyCartComponent {
  TotalBooksincart = 1;
  Title = "DummyBook";
  Author = "Priyanshu Ginkal";
  Price = "500";
  DiscountedPrice = "1000";

  /**
   *
   */
  constructor(private router: Router) {
  }
  showaddress:boolean=false;
  showOrderSummary: boolean = false
  CustomerDetailsToToggle() {
    // // Only show the address details form if it's currently hidden
    // if (!this.CustomerDetails) {
    //   const AddAddressForm = document.getElementById('AddressDetailDiv');
    //   if (AddAddressForm != null) {
    //     AddAddressForm.style.display = 'block';
    //   }
    // }
    // // Update the state variable to reflect that the form is open
    // this.CustomerDetails = true;
    this.showaddress=!this.showaddress;
  }


  ContinueToPlaceOrderToTrue(){
    // this.ContinueToPlaceOrder = true;
    this.showOrderSummary = !this.showOrderSummary;
  }


  Quantity: number = 1;
  plus(){
    this.Quantity += 1;
  }
  Minus(){
    if(this.Quantity != 1){
      this.Quantity -= 1;
    }
  }
  RemoveAll(){
    this.Quantity = 0;
  }
  NavigateToHome(){
    // this.route.redirectByUrl("/home")
  }
  redirectTo(){
    this.router.redirectByUrl("/orderplaced");
  }
}
