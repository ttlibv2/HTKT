import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import { ContactModel } from "app/_model/contact.model";

@Injectable()
export class ContactService {
  urlPost : string = "https://docs.google.com/forms/d/e/1FAIpQLSfr43gYjmex6-mCbF9b3fvBZrN08wTf3HocPvC9CHq_zHF_gA/viewform";

  constructor(private http: Http) { }

  getHeader():void{
    const options = new RequestOptions({
    method: RequestMethod.Get,
    url: this.urlPost
  });

  const req = new Request(options);
  let h = req.headers.get("user-agent");
  console.log(h);

    // const options = new RequestOptions({
    //   method: "POST",
     
    // });

    // const body = {
    //   "entry.1284818601": "user 123",
    //   'fvv':1,
    //   'draftResponse':[null,null,"3092170063162385994"],
    //   'pageHistory':0,
    //   'fbzx':3092170063162385994
    // };

    //this.http.post(this.urlPost, body, options).subscribe(res=>console.log(res.text()));
    
  }

  insertRow(contact: ContactModel): boolean {
    return false;
  }
}
