import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from  '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  layoutService = inject(LayoutService)
}
