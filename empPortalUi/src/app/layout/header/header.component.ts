import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output()
  menuClicked = new EventEmitter<void>();

  isDark = false;

  constructor(private themeService: ThemeService){

  }

  toggleTheme() {

    this.isDark = !this.isDark;
    this.themeService.toggleTheme();
  }
}