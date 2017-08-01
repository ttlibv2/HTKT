import { Component, OnInit } from '@angular/core';
import { Form } from "@angular/forms";
import { Contact } from "app/contact/share/contact.model";
import { KenhHoTro } from "app/contact/share/kenh-ho-tro.enum";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  kenhs = [
    { "value": "Phone", "text": "khách hàng yêu cầu hỗ trợ qua điện thoại." },
    { "value": "Team", "text": "khách hàng yêu cầu hỗ trợ qua Teamviewer." },
    { "value": "TV", "text": "khách hàng yêu cầu tư vấn/đăng ký mới dịch vụ." },
    { "value": "GH", "text": "khách hàng yêu cầu gia hạn dịch vụ." },
  ];

  public contact: Contact;
  public resultLog: string = "";


  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
  }

  sendContact(form): void {
    console.log(form);
    
    let formValue = form.value;

    this.contact.ngayHT = formValue.ngayHT;
    this.contact.phongBan = formValue.phongBan;
    this.contact.kenhHoTro = formValue.kenhHoTro;
    this.contact.lineNoiBo = formValue.lineNoiBo;
    this.contact.maSoThue = formValue.maSoThue;
    this.contact.tenCongTy = formValue.tenCongTy;
    this.contact.tenKhachHang = formValue.tenKhachHang;
    this.contact.email = formValue.email;
    this.contact.soDienThoai = formValue.soDienThoai;
    this.contact.noiDungHT = formValue.noiDungHT;

    // result
		this.resultLog = this.contact.result();
		this.resetForm();
  }

  resetForm(): void {
    this.contact.reset();
  }

}
