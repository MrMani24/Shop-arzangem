import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CallOfPageComponent } from './call-of-page/call-of-page.component';

export const routes: Routes = [
{path: 'Home' , component: HomePageComponent},
{path: 'Call of duty Cp' , component: CallOfPageComponent },
{path: '' , redirectTo:'Home' , pathMatch: 'full'}
];
