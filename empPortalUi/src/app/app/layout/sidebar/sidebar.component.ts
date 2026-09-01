import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { RouterLink ,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
    
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems = [
  { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { title: 'Employees', icon: 'groups', route: '/employees' },
  { title: 'My Profile', icon: 'person', route: '/profile' },
  { title: 'Documents', icon: 'folder', route: '/documents' },
  { title: 'Settings', icon: 'settings', route: '/settings' }
];

}
