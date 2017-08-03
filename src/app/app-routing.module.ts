import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";

const appRoutes: Routes = [
    {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    {path: '**', redirectTo: 'contact'}
];

export const AppRouting = RouterModule.forRoot(appRoutes, {useHash:true});