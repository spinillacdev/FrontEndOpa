import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
