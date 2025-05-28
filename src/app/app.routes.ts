import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CallOfPageComponent } from './call-of-page/call-of-page.component';
import { BasketComponent } from './basket/basket.component';

export const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'Call of duty Cp', component: CallOfPageComponent },
  { path: 'Basket', component: BasketComponent },
{ path: '', redirectTo: 'Home', pathMatch: 'full' }
];
