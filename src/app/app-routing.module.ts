import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    {path: '**', redirectTo: '/contact'}
];

export const AppRouting = RouterModule.forRoot(appRoutes);