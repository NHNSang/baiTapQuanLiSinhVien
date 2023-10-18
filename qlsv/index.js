// Xác định các bước cần làm
// B1: tạo hàm để lấy dữ liệu người dùng
// Có 2 cách

// Cách 1 gán tên biến bằng function
// function getValueUser (){
//     // Làm theo dạng object
//     var sinhVien = {}
//     sinhVien.maSv = document.getElementById("txtMaSV").value;
//     // ...
//     // Sau đó họi tới từng mã 
// }

// Cách 2 dùng array: Dùng mãng
var arrIdInput = [
    "txtMaSV",
    "txtTenSV",
    "txtEmail",
    "txtPass",
    "txtNgaySinh",
    "khSV",
    "txtDiemToan",
    "txtDiemLy",
    "txtDiemHoa",
]

// B3: Tạo Array lưu trữ
var arrSinhVien = [];

// Sau đó tạo function để lưu trử
function getValueUser (){
    // Giúp ngăng chặn reload lại trang
    event.preventDefault()

    // Muốn tạo đối tượng từ lớp đối tượng thì dùng từ khoá new
    var sinhVien = new SinhVien;
    console.log(sinhVien)

    // B2: Tạo 1 đối tượng để lưu trử tên sinh viế
    // Chạy vòng lặp
    for (var i = 0 ; i < arrIdInput.length ; i++){
        // Sau đó tạo bién mỗi lần chạy qa vòng lặp đó thì lưu vào biến 
        var valueInput = document.getElementById(arrIdInput[i]).value;
        console.log(valueInput)

        // Có 3 cách để gọi tới các chuỗi trong arrIdInput
        // Cách 1:
        // sinhVien.txtDiemHoa

        // Cách 2:
        // sinhVien['khSV']

        // Cáhc 3: khi vòng lặp chạy qua thì sẽ lây thuộc tính trước sau đó lấy thuộc tính theo thứ tự của biến mà mình đang tạo, sao đó truyền thuộc tính vào valueInput
        sinhVien[arrIdInput[i]] = valueInput;
    }
    console.log(sinhVien)

    // Gọi tới mãng và dùng tới push để đưa dữ liệu tới mãng để lưu giữu liệU biên trong mãng (VD người dùng nhập dữ liệu vào mãng thì sẽ được lưu vào arrSinhVien, cứ mỗi giữ liệu được nhập thì sẽ tự đông lưu)
    arrSinhVien.push(sinhVien);
    console.log(arrSinhVien)

    randerDisplay() 

    // Khi rander trên display xong, để clear các giữ liêu có trong input thì sẽ resert lại bằng cách
    document.getElementById("formQLSV").reset()


    // Cách 1: tạo biến ngay trong functin
    // Khi có đưỢc giữ liêu của người dùng rồi thì nhiệm vụ tiếp theo là đưa giữ liệu lên giao diện 
    // var content = '';
    
    // // Dùng vòng lập để đưa lên giao diện
    // for (var z = 0; z < arrSinhVien.length; z++){
    //     // Toạ ra valueSinhVien (Đưa lên giao diện) gọi tới arrSinhVien (mãng input mà người dùng đã điền vào)
    //     var valueSinhVien = arrSinhVien[z];
        
    //     // vì layout đang tạo <tr> với các nội dung <th> thì bắt buộc mình phải tạo <td> trong nội dung và nội dung đó chính là nội dung của người nhập
    //     content += `
    //     <tr>
    //         <td>${valueSinhVien.txtMaSV}</td>
    //         <td>${valueSinhVien.txtTenSV}</td>
    //         <td>${valueSinhVien.txtEmail}</td>
    //         <td>${valueSinhVien.txtNgaySinh}</td>
    //         <td>${valueSinhVien.khSV}</td>
    //         <td>${valueSinhVien.tinhDiemTrungBinh()}</td>
    //     </tr>
    //     `
    // }
    // console.log(content)
    // document.getElementById("tbodySinhVien").innerHTML = content


} 

// Để lưu trữ và có thể dùng lại hàm khi render lên giao diện, chung ta sẽ tách các tính năng ra để sau này dể dùng
function randerDisplay (arr){
    // Dùng if để kiểm tra rander khi người dùng quên truyền vào tham số thì vẫn ra kết qua, cách này giúp cho function rander được tối ưu hơn
    if (arr == undefined){
        arr = arrSinhVien
    }

    // Hoặc dùng trulthy và fallsy
    // arr = undefined => là fall vậy thì phủ định của sai là đúng
    // if (!arr == undefined){
    //     arr = arrSinhVien
    // }

    var content = '';
    for (var z = 0; z < arr.length; z++){
        var valueSinhVien = arr[z];
        content += `
    <tr>
        <td>${valueSinhVien.txtMaSV}</td>
        <td>${valueSinhVien.txtTenSV}</td>
        <td>${valueSinhVien.txtEmail}</td>
        <td>${valueSinhVien.txtNgaySinh}</td>
        <td>${valueSinhVien.khSV}</td>
        <td>${valueSinhVien.tinhDiemTrungBinh()}</td>
        <td>
            <button onclick="deleteUser('${valueSinhVien.txtMaSV}')" class="btn btn-danger">Xoá</button>
            <button class="btn btn-danger">Sửa</button>
        </td>

    </tr>
    `
    }
    document.getElementById("tbodySinhVien").innerHTML = content

}   





// B4: Dùng mãng đang chứa các sinh viên, chạy vòng lậP và đưa lên giao diện

// Cách 1 sủ dụng JS để DOM đến nút button
// Dùng onclick vào nút button để lấy thông tin người dùng
// Cách gọi tên class sẽ tương tự các dùng CSS
// document.querySelector(".form-group button.btn-success").onclick = getValueUser

// Cách 2 thay vì sử dụng JS thì chúng ta có thể dùng thẳng bên HTML bằng cách cho type = "summit", sau đó lên onsubmit và gán dữ liệu đã tạo vào. Cách này giúp cho trải nghiệm người dùng tốt và nhanh hơn
// Lưu ý 1: Khi dùng onsubmit và ko gán 1 giá trị nào bên trong function thì trang web sẽ bị tình trạng là reload lại trang vì vậy phải vào function và thêm tính năng cho nó
// Gọi tới preventDefault giúp ngăn chặn reload lại trang 
// Tính năng : event.preventDefault()


// Làm xong hết đăng nhập giữ liêu lên rồi thì vào HTML thêm <th> Hành động vào
// Sau đó qa JS thêm 2 nút button Xoá và Sửa
// Sau đó tạo ra 1 hàm
// Chức năng xoá 
function deleteUser (maSv){ 
    console.log("Tôi là xoá")
    console.log(maSv)
    var index = -1;
    for (var i = 0 ; i < arrSinhVien.length ; i++){
        var sinhVien = arrSinhVien[i]
        if((sinhVien.txtMaSV = maSv)){
            console.log(i);
            index = i;
        }
    }
    if (index != -1){
        arrSinhVien.splice(index,1);

        // Gọi lại hàm render giao diện để update dử liệu mới lên giao diện
        randerDisplay();
        console.log(arrSinhVien)
    }


}










