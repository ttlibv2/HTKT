export class Contact {
    public ngayHT: string;
    public phongBan: string;
    public kenhHoTro: string;
    public lineNoiBo: string;
    public caLamViec: string;
    public linhVucHT: string;

    public maSoThue: string;
    public tenCongTy: string;
    public tenKhachHang: string;
    public email: string;
    public soDienThoai: string;
    public noiDungHT: string;
    public tinhTrangXL: string;

    constructor() {
        this.ngayHT = new Date().toString();
        this.phongBan = "HTKH";
        this.lineNoiBo = "";
        this.reset();
    }

    reset(): void {
        this.kenhHoTro = "";
        this.maSoThue = "";
        this.tenKhachHang = "";
        this.email = "";
        this.soDienThoai = "";
        this.noiDungHT = "";
        this.tenCongTy = "";
        this.tinhTrangXL = "";
        this.linhVucHT = "";
    }

    toString(): string {
        let log: string = "";

        // phong ban
        //log += "// [Phòng ban]_[Kênh hỗ trợ]_[Line nội bộ]_[Mã số thuế/Mã đơn vị]_[yymmdd]";
        log += "[" + this.phongBan + "]";
        log += "_[" + this.kenhHoTro + "]";
        log += "_[" + this.lineNoiBo + "]";
        log += "_[" + this.maSoThue + "]";
        log += "_[" + this.ngayHT + "]";
        log += "\n\n---------------------\n\n";

        // contact
        log += "Tên công ty: " + this.tenCongTy;
        log += "\nMã số thuế / Mã đơn vị: " + this.maSoThue;
        log += "\nTên khách hàng: " + this.tenKhachHang;
        log += "\nEmail: " + this.email;
        log += "\nSố điện thoại liên hệ: " + this.soDienThoai;
        log += "\nNội dung cần hỗ trợ: " + this.noiDungHT;

        return log;
    }
}

export const caLamViecs: string[] = [
    "Cả ngày",
    "Ca sáng",
    "Ca chiều",
    "Ca Tối",
    "Sáng Tối",
    "Chiều Tối"
];

export const linhVucHTs: string[] = [
    "iBHXH",
    "TaxOnline và Pay24",
    "iHQ",
    "Chữ ký số",
    "iThongKe",
    "Hỗ trợ tận nơi",
    "Khác"
];

export const tinhTrangXLs: string[] = [
    "Đã xử lý",
    "Chưa xử lý",
    "Gửi phòng Tester"
];

export const kenhHoTros: any = [
    { "value": "Phone", "text": "khách hàng yêu cầu hỗ trợ qua điện thoại." },
    { "value": "Team", "text": "khách hàng yêu cầu hỗ trợ qua Teamviewer." },
    { "value": "TV", "text": "khách hàng yêu cầu tư vấn/đăng ký mới dịch vụ." },
    { "value": "GH", "text": "khách hàng yêu cầu gia hạn dịch vụ." },
];