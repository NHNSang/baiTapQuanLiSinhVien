// tạo hàm giúp xử lí và lấy thông tin người dùng

function getValueForm (){
    // Xử lí bên trong hàm, lây thông tin người dùng, lưu trữ thông tin của sinh viên vào bên trong object thì dùng dấu {} để có thể liên kết đến các biến
    var sinhVien = {
        tinhDiemTrungBinh: function(){
            var diemTrungBinh = (this.diemToan + this.diemVan) / 2;
            // Phải return lại để trả kết quả nếu ko trả kết quả sẽ hiện undifined
            return diemTrungBinh
        }, 

        // Nếu trên 8 là giỏi, dưới 8 là khá
        xepLoai: function() {
            var diemTrungBinh = this.tinhDiemTrungBinh()
            if (diemTrungBinh >= 8){
                return 'Đạt loại Giỏi'
            }
            else{
                return  'Đạt loại Khá'
            }
        }
    }

    sinhVien.maSv = document.getElementById("txtMaSV").value;
    sinhVien.tenSv = document.getElementById("txtTenSV").value;
    sinhVien.loaiSV = document.getElementById("loaiSV").value;
    sinhVien.diemToan = document.getElementById("txtDiemToan").value * 1;
    sinhVien.diemVan = document.getElementById("txtDiemVan").value * 1;
    
    console.log(sinhVien)

    document.getElementById("spanTenSV").innerHTML = sinhVien.tenSv;
    document.getElementById("spanMaSV").innerHTML = sinhVien.maSv;
    document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    document.getElementById("spanDTB").innerHTML = sinhVien.tinhDiemTrungBinh();
    document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai();
}

// Kiểm tra xem thử tính năng đã đúng chưa
// Dom tới các thẻ span để rander lên giao diện từ người dùng nhập
// Dom tới nút button và gán hàm cho sự kiện onclick

document.querySelector(".btn-success").onclick = getValueForm;