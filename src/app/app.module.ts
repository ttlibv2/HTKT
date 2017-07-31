import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { HttpModule }    from '@angular/http';
import { ContactService } from "app/_services/contact.service";

//import { ContactModel } from "app/_model/contact.model";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
	  HttpModule
  ],
  providers: [{provide:'contactSrv', useClass: ContactService}],
  bootstrap: [AppComponent]
})
export class AppModule { }