import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {HttpModule} from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { GoogleFormService } from "./services/google-form.service";
import { HomeComponent } from './home/home.component';

const routing: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routing)
  ],

  providers: [
    { provide: 'googleForm', useClass: GoogleFormService }
  ],

  declarations: [HomeComponent],
})
export class ReportModule { }
