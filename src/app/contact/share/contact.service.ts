import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contact } from "app/contact/share/contact.model";

@Injectable()
export class ContactService {
  private pathSendContact: string = "https://script.google.com/macros/s/AKfycbym7EIUEieCXLOg8L59gqct8PIwy9NxymYS_t458tcj9xaoyKTk/exec";
  public urlSheet: string = "https://docs.google.com/spreadsheets/d/1e-ht5WGQm5Jl3Eroiv8Ww7XU02U74mcy4GM5nB3YaeQ/edit#gid=0";

  private response: Response;

  constructor(private http: Http) { }

  sendContact(contact: Contact): boolean {
    this.response = null;
    let body = JSON.stringify(contact);
    this.http.post(this.pathSendContact, body).subscribe(res => this.response = res);
    return true;
  }

  getResponse(): Response {
    return this.response;
  }

}