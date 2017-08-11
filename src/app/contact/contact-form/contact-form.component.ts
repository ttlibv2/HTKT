import { Component, OnInit, Inject } from '@angular/core';
import { Form } from "@angular/forms";
import { Contact, tinhTrangXLs, kenhHoTros, caLamViecs, linhVucHTs } from "app/contact/share";
import { ContactService } from "app/contact/share/contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  kenhs: any = kenhHoTros;
  caLVs: string[] = caLamViecs;
  linhVucHTs: string[] = linhVucHTs;
  tinhTrangs: string[] = tinhTrangXLs;

  public contact: Contact;
  public resultLog: string = "";
  public sendStatus: boolean = false;
  public urlSheet: string = "";


  constructor( @Inject('contactSrv') private contactSrv: ContactService) { }

  ngOnInit() {
    this.contact = new Contact();
    this.urlSheet = this.contactSrv.urlSheet;
  }

  sendContact(form): void {
    console.log(form);

    let formValue = form.value;

    // -- phong ban
    this.contact.ngayHT = formValue.ngayHT;
    this.contact.phongBan = formValue.phongBan;
    this.contact.kenhHoTro = formValue.kenhHoTro;
    this.contact.lineNoiBo = formValue.lineNoiBo;
    this.contact.caLamViec = formValue.caLamViec;
    this.contact.linhVucHT = formValue.linhVucHT;

    // --- ma so thue
    this.contact.maSoThue = formValue.maSoThue;
    this.contact.tenCongTy = formValue.tenCongTy;
    this.contact.tenKhachHang = formValue.tenKhachHang;
    this.contact.email = formValue.email;
    this.contact.soDienThoai = formValue.soDienThoai;
    this.contact.noiDungHT = formValue.noiDungHT;
    this.contact.tinhTrangXL = formValue.tinhTrangXL;

    // result
    this.resultLog = this.contact.toString();
    this.contactSrv.sendContact(this.contact);
  }

  resetForm(): void {
    this.contact.reset();
    this.resultLog = "";
  }

}
