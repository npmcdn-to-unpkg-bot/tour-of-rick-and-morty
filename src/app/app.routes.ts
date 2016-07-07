import { provideRouter, RouterConfig } from '@angular/router';
import { RebelsComponent } from './rebels/rebels.component';
import { RebelDetailComponent } from './rebel-detail/rebel-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: RouterConfig = [
    
    {
        path: 'rebels',
        component: RebelsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: RebelDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard'
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]