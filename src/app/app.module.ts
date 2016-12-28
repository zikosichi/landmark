import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemPage } from '../pages/item/item';

import { SortingOrderService } from '../services/sorting-order';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SortingOrderService]
})
export class AppModule {}
