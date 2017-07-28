import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { ContactModel } from "app/_model/contact.model";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
 // providers: [{provide:'contact', useClass: ContactModel}],
  bootstrap: [AppComponent]
})
export class AppModule { }
