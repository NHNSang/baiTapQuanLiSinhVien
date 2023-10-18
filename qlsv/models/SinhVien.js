// Tạo mã đối tượng chung tại 1 file riêng để sau này dể dùng và làm tìm kiếm sửa chữa bảo trì dể hơn
// Tạo mã Sv, tên Sv, email, pass, ngày sinh, khoá học, điểm toán, điểm lý, điểm hoá
// Tạo function SinhVien lưu ý chữ S phải viết hoa để vân biệt hàm và lớp đối tượng
function  SinhVien (){
    // khi khai báo biến lớp đối thượng phải thêm this.
    this.txtMaSV= '';
    this.txtTenSV= '';
    this.txtEmail= '';
    this.txtPass= '';
    this.txtNgaySinh = '';
    this.khSV= '';
    this.txtDiemToan= '';
    this.txtDiemLy= '';
    this.txtDiemHoa= '';

    // Tạo thêm phương thức để tính điểm trung bình 
    this.tinhDiemTrungBinh = function (){
        var diemTrungBinh = (this.txtDiemToan * 1 +  this.txtDiemLy * 1 +  this.txtDiemHoa * 1 ) / 3;
        return diemTrungBinh
    }
}