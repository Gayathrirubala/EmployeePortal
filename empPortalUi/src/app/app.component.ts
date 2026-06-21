import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  BreakpointObserver
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  sidebarOpen = true;
  sidenavMode:
    'side' | 'over' = 'side';
    opened = true;

  constructor(private breakpointObserver:BreakpointObserver) {

  }

  ngOnInit() {

  this.breakpointObserver
      .observe(['(max-width:768px)'])
      .subscribe(result => {

        if(result.matches) {

          this.sidenavMode = 'over';
          this.opened = false;

        } else {

          this.sidenavMode = 'side';
          this.opened = true;
        }
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}