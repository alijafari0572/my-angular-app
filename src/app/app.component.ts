import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { AlertmenuComponent } from "../header/alertmenu/alertmenu.component";
import { TopmenuComponent } from "../header/topmenu/topmenu.component";
import { MainmenuComponent } from "../header/mainmenu/mainmenu.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AlertmenuComponent, TopmenuComponent, MainmenuComponent, ProductListComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
