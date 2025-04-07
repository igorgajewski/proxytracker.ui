import { Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProxylogComponent } from './components/proxylog/proxylog.component';

export const routes: Routes = [
    {
        path: '',
        component: MainpageComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
    },
    {
        path:'proxy/:client',
        component: ProxylogComponent
    }
];
