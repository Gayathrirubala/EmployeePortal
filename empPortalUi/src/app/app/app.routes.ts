import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './shared/guard/login.guard';
import { authGuard,authChildGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        canActivate:[authGuard],
        canActivateChild:[authChildGuard],
        children:[
            {
                path:'dashboard',
                loadComponent:()=>import('./pages/dashboard/dashboard.component')
                .then(m=>m.DashboardComponent)
            },
            {
                path:'employees',
                loadComponent:()=>import('./pages/employee/employee.component').then(m=>m.EmployeeComponent)
            },
            {
                path:'employees/view/:id',
                loadComponent:()=>import('./pages/employee/employee-view/employee-view.component')
                .then(m=>m.EmployeeViewComponent)
            },
            {
                path:'profile',
                loadComponent:()=>
                    import('./pages/profile/profile.component')
                .then(m=>m.ProfileComponent)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ],
        
    },
    {
        path: 'login',
        loadComponent: () =>
        import('./pages/login/login.component')
            .then(m => m.LoginComponent),
        canActivate:[loginGuard]
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'login'
    }
];
