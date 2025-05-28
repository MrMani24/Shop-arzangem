import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductComponent } from "./product/product.component";
import { DecimalPipe } from '@angular/common';
import { ServiceBasketService } from '../+service/service-basket.service';

@Component({
  selector: 'app-call-of-page',
  imports: [ProductComponent],
  templateUrl: './call-of-page.component.html',
  styleUrl: './call-of-page.component.scss'
})
export class CallOfPageComponent {
  basket1 = inject(ServiceBasketService)
  buy($event: any) {
    this.basket1.basket.push($event)
    this.basket1.number++;
  }
 sericesProducts = inject(ServiceBasketService)
}
