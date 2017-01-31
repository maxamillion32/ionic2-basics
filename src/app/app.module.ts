import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/users/user/user';
import { ShopPage } from '../pages/shop/shop';
import { BuyoutPage } from '../pages/buyout/buyout';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    ShopPage,
    BuyoutPage
  ],
  // Module provided by Ionic 2 - includes Form and Http modules
  // .forRoot() Configure Ionic 2 to wrap around MyApp component 
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  // Allows force Angular to create factories of Components
  // Ionic 2 doesn't use Angular router or placing selector in template of component
  // Has a different concept of routing - each screen has to be registered here to force Angular to create an instance of a page
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    ShopPage,
    BuyoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
