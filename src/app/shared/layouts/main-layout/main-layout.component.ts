import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
