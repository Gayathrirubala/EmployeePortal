import { Component,inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutService } from '../../shared/services/layout.service';
import { ThemeService } from '../../shared/services/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  layoutService = inject(LayoutService);
  themeService = inject(ThemeService);
  private authService = inject(AuthService);
  private router = inject(Router);
  user = this.authService.currentUser;

  logout(): void {

    this.authService.logout();
    this.router.navigate(['/login']);

  }

}


