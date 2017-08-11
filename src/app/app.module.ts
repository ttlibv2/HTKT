import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { AppRouting } from "app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    GridModule

  ],

  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }