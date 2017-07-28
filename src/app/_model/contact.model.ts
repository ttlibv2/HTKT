
export class ContactModel {
        public ngayHT : Date;
		public phongBan : string;
		public kenhHoTro : string;
		public lineNoiBo : string;
		public maSoThue : string;
		public tenCongTy : string;
		public tenKhachHang : string;
		public email : string;
		public soDienThoai : string;
		public noiDungHT : string;
	constructor()
	{
		//this.lineNoiBo = lineNoiBo;
			this.phongBan = "HTKT";
			this.ngayHT = new Date();
		}

		reset():void{
			//this.ngayHT = null;
			//this.phongBan = "";
			this.kenhHoTro = "";
			this.lineNoiBo = "";
			this.maSoThue = "";
			this.tenKhachHang = "";
			this.email = "";
			this.noiDungHT = "";
			this.tenCongTy = "";
		}

		result():string{
			let log : string = "";

			// phong ban
			log += "["+this.phongBan+"]";
			log += "_["+this.kenhHoTro+"]";
			log += "_["+this.lineNoiBo+"]";
			log += "_["+this.maSoThue+"]";
			log += "_["+this.ngayHT+"]";
			log += "\n\n---------------------\n\n";

			// contact
			log += "Tên công ty: "+this.tenCongTy;
			log += "\nMã số thuế / Mã đơn vị: "+this.maSoThue;
			log += "\nTên khách hàng: "+this.tenKhachHang;
			log += "\nEmail: "+this.email;
			log += "\nSố điện thoại liên hệ: "+this.soDienThoai;
			log += "\nNội dung cần hỗ trợ: "+this.noiDungHT;

			return log;
		}
}