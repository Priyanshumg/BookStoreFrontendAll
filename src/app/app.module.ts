import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignUPComponent } from './Components/UserAuth/login-sign-up/login-sign-up.component';
import {MatTabsModule} from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './Components/BookStoreApp/home/home.component';
import { TopNavigationComponent } from './Components/BookStoreApp/Templates/top-navigation/top-navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyCartComponent } from './Components/BookStoreApp/my-cart/my-cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { MyProfileComponent } from './Components/BookStoreApp/my-profile/my-profile.component';
import { ForgetPasswordComponent } from './Components/UserAuth/forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookViewComponent } from './Components/BookStoreApp/Templates/book-view/book-view.component';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@Angular/material/divider';
import { OrderPlacedComponent } from './Components/BookStoreApp/order-placed/order-placed.component'
import {MatTableModule} from '@angular/material/table';
import { MyWishListComponent } from './Components/BookStoreApp/my-wish-list/my-wish-list.component';
import { MyOrdersComponent } from './Components/BookStoreApp/my-orders/my-orders.component';
import { DisplayAllBooksComponent } from './Components/BookStoreApp/display-all-books/display-all-books.component';
import { DisplaybooktemplateComponent } from './Components/BookStoreApp/Templates/displaybooktemplate/displaybooktemplate.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignUPComponent,
    HomeComponent,
    TopNavigationComponent,
    MyCartComponent,
    MyProfileComponent,
    ForgetPasswordComponent,
    BookViewComponent,
    OrderPlacedComponent,
    MyWishListComponent,
    MyOrdersComponent,
    DisplayAllBooksComponent,
    DisplaybooktemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    CdkAccordionModule,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
