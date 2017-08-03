import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from "app/app-routing.module";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRouting
    
  ],

  providers:[
    //{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }