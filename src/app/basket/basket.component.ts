import { DecimalPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BasketService } from '../+service/basket.service';

@Component({
  selector: 'app-basket',
  imports: [DecimalPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
basket: any[] = [];
  basketService = inject(BasketService);

  ngOnInit() {
    this.refreshBasket(); 
  }

  refreshBasket() {
    this.basket = [...this.basketService.getBasket()];
  }
}

