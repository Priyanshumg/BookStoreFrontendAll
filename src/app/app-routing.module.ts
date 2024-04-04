import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignUPComponent } from './Components/UserAuth/login-sign-up/login-sign-up.component';
import { HomeComponent } from './Components/BookStoreApp/home/home.component';
import { TopNavigationComponent } from './Components/BookStoreApp/Templates/top-navigation/top-navigation.component';
import { MyCartComponent } from './Components/BookStoreApp/my-cart/my-cart.component';
import { MyProfileComponent } from './Components/BookStoreApp/my-profile/my-profile.component';
import { OrderPlacedComponent } from './Components/BookStoreApp/order-placed/order-placed.component';
import { MyWishListComponent } from './Components/BookStoreApp/my-wish-list/my-wish-list.component';
import { MyOrdersComponent } from './Components/BookStoreApp/my-orders/my-orders.component';
import { ForgetPasswordComponent } from './Components/UserAuth/forget-password/forget-password.component';
import { DisplayAllBooksComponent } from './Components/BookStoreApp/display-all-books/display-all-books.component';
import { BookViewComponent } from './Components/BookStoreApp/Templates/book-view/book-view.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'login', component: LoginSignUPComponent },
  {path:'forget',component:ForgetPasswordComponent},
  { path: 'home', component: HomeComponent,
    children:[
      {path: 'displaybooks', component: DisplayAllBooksComponent},
      {path: 'bookview', component: BookViewComponent },
      {path: 'cart', component: MyCartComponent},
      { path: 'myprofile', component: MyProfileComponent},
      { path: 'orderplaced', component: OrderPlacedComponent},
      { path: 'wishlist', component:MyWishListComponent},
      { path: 'myorders', component:MyOrdersComponent}
    ]
  },
  { path: 'top', component: TopNavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
