import { Injectable ,signal} from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  cards = signal<DashboardCard[]>([
    {
      title: 'Employees',
      count: 120,
      icon: 'groups',
      color: '#1976d2'
    },
    {
      title: 'Departments',
      count: 12,
      icon: 'apartment',
      color: '#2e7d32'
    },
    {
      title: 'Documents',
      count: 85,
      icon: 'folder',
      color: '#ef6c00'
    },
    {
      title: 'Pending Tasks',
      count: 18,
      icon: 'pending_actions',
      color: '#d32f2f'
    }
  ]);
}
