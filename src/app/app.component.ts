import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FooterComponent } from "./footer/footer.component";
import { CallOfPageComponent } from "./call-of-page/call-of-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HomePageComponent, FooterComponent, CallOfPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
