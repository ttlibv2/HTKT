import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactRouting } from "app/contact/contact-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ContactRouting,
    FormsModule
  ],
  declarations: [
    ContactFormComponent,
    ContactListComponent,
    ContactDetailComponent
  ]
})
export class ContactModule { }
