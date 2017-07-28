import { Component, Inject } from '@angular/core';
import { ContactModel } from "app/_model/contact.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	contact: ContactModel = new ContactModel();
	phongBan:string="HTKT";
	kenhHoTros: Array<string> = ["Phone", "Team", "TV", "GH"];
	resultLog : string = "";
  
	constructor(){
		//this.contact = new ContactModel();
	}
  
	sendContact(formValue):void {
		//this.contact = new ContactModel();
		this.contact.phongBan = formValue.pbInfo.phongBan;
		this.contact.kenhHoTro = formValue.pbInfo.kenhHoTro;
		this.contact.lineNoiBo = formValue.pbInfo.lineNoiBo;
		this.contact.maSoThue = formValue.contactInfo.maSoThue;
		this.contact.tenCongTy = formValue.contactInfo.tenCongTy;
		this.contact.tenKhachHang = formValue.contactInfo.tenKhachHang;
		this.contact.email = formValue.contactInfo.email;
		this.contact.soDienThoai = formValue.contactInfo.soDienThoai;
		this.contact.noiDungHT = formValue.contactInfo.noiDungHT;

		// result
		this.resultLog = this.contact.result();
		//formValue.pbInfo.reset();
		this.resetForm();
	}

	resetForm():void{
		this.contact.reset();
	}
}
