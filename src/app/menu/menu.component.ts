import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceBasketService } from '../+service/service-basket.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  n1 = inject(ServiceBasketService)
  router = inject(Router);
  rout() {
    this.router.navigateByUrl('Basket')
  }
  ismenu: boolean = false;
}
