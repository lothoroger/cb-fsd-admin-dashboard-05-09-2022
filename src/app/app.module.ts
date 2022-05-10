import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ProductComponent } from './components/product/product.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { OrdersComponent } from './components/users/orders/orders.component';
import { OrderCreateComponent } from './components/users/orders/order-create/order-create.component';
import { OrderViewComponent } from './components/users/orders/order-view/order-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProductComponent,
    ProductViewComponent,
    ProductCreateComponent,
    UsersComponent,
    UserProfileComponent,
    OrdersComponent,
    OrderCreateComponent,
    OrderViewComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
