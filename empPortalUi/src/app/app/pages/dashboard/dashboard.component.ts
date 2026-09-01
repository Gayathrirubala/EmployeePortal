import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private dashboardService = inject(DashboardService);

  cards = this.dashboardService.cards;
  user = this.authService.currentUser;

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
