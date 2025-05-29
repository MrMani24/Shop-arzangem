import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBasketService {
  number = 0;
  onbuy(p: any) {
    let a = this.basket.findIndex(m => m === p);
    console.log(a);
    this.basket.splice(a ,1);
    // this.basket = this.basket.filter(m => m != p);
    this.number--;
  }
  products = [
    { id: 1, title: "80 سی پی کالاف موبایل", price: '79900', pic: 'cp80.png' },
    { id: 2, title: "160 سی پی کالاف موبایل", price: '159000', pic: 'cp160.png' },
    { id: 3, title: "240 سی پی کالاف موبایل", price: '249000', pic: 'cp240.png' },
    { id: 4, title: "320 سی پی کالاف موبایل", price: '319000', pic: 'cp320.png' },
    { id: 5, title: "420 سی پی کالاف موبایل", price: '399000', pic: 'cp420.png' },
    { id: 6, title: "500 سی پی کالاف موبایل", price: '479000', pic: 'cp500.png' },
    { id: 7, title: "580 سی پی کالاف موبایل", price: '559000', pic: 'cp580.png' },
    { id: 8, title: "660 سی پی کالاف موبایل", price: '639000', pic: 'cp660.png' },
    { id: 9, title: "740 سی پی کالاف موبایل", price: '719000', pic: 'cp740.png' },
    { id: 10, title: "880 سی پی کالاف موبایل", price: '799000', pic: 'cp880.png' },
    { id: 11, title: "960 سی پی کالاف موبایل", price: '879000', pic: 'cp960.png' },
    { id: 12, title: "1040 سی پی کالاف موبایل", price: '959000', pic: 'cp1040.png' },
    { id: 13, title: "1120 سی پی کالاف موبایل", price: '1039000', pic: 'cp1120.png' },
    { id: 14, title: "1300 سی پی کالاف موبایل", price: '1199000', pic: 'cp1300.png' },
    { id: 15, title: "1760 سی پی کالاف موبایل", price: '1599000', pic: 'cp1740.png' },
    { id: 16, title: "2400 سی پی کالاف موبایل", price: '2099000', pic: 'cp2400.png' },
    { id: 17, title: "5000 سی پی کالاف موبایل", price: '4199000', pic: 'cp5000.png' },
    { id: 18, title: "10800 سی پی کالاف موبایل", price: '7999000', pic: 'cp10800.png' }
  ]

  basket: any[] = []
}
