import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: any[] = []; // آرایه ساده برای سبد خرید

  addToBasket(item: any) {
    this.basket.push(item); // اضافه کردن آیتم به سبد
  }

  getBasket() {
    return this.basket; // برگردوندن سبد
  }
}
