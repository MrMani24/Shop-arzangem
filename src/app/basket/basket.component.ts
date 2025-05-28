import { Component, inject } from '@angular/core';
import { ServiceBasketService } from '../+service/service-basket.service';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  imports: [DecimalPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  router = inject(Router)
  rout() {
    this.router.navigateByUrl("/Home")
  }
  basket2 = inject(ServiceBasketService)
}
