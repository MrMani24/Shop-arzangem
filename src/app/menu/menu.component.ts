import { Component, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasketService } from '../+service/basket.service';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, BasketComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  ismenu: boolean = false;
  showBasket: boolean = false;

  toggleBasket() {
    this.showBasket = !this.showBasket;
  }
}
