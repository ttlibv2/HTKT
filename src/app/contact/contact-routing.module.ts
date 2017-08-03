import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from "app/contact/contact-form/contact-form.component";
import { ContactDetailComponent } from "app/contact/contact-detail/contact-detail.component";
import { ContactListComponent } from "app/contact/contact-list/contact-list.component";

const contactRoutes: Routes = [
    {path: 'add', component: ContactFormComponent},
    {path: 'list', component: ContactListComponent},
    {path: 'detail/:id', component: ContactDetailComponent},
    {path: 'edit/:id', component: ContactDetailComponent},
    {path: '**', redirectTo: 'add'}
];

export const ContactRouting = RouterModule.forChild(contactRoutes);