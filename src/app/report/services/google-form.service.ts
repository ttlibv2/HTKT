import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import { ConfigGoogleForm } from "app/report/model/item-google-form.model";

@Injectable()
export class GoogleFormService {

  constructor(private http: Http) { }

  submitForm(): void { }

  getItemsFromServer(id: string): ConfigGoogleForm {
    return null;
  }

  getItemsFromFile(): ConfigGoogleForm {
    return null;
  }

}
