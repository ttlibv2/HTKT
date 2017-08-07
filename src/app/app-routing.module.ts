import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from "app/app.component";

const appRoutes: Routes = [
    {path:'', component: AppComponent},
    {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    {path: 'report', loadChildren: './report/report.module#ReportModule'},
    {path: '**', redirectTo: ''}
];

export const AppRouting = RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules});