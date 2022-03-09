/*
    Từ khoá khai báo biến: Phân biệt var let và const
    var: Hỗ trợ cơ chế hoisting, Phạm vi hoạt động của var trên toàn bộ scope
    let: Không hỗ trợ cơ chế hoisting. Không thể khai báo biến cùng tên trên cùng phạm vi scope. Nếu như khác scope khai báo cùng tên biến thì es6 sẽ hiểu 2 biến phân bi.
    => Trong es6 dùng let thay cho var trong mọi tình huống
    const: Giống let tuy nhiên đối các giá trị khai báo = const sẽ không thể gán lại được (primitive value: string,number, boolean, undefine, null) . Tuy nhiên đối với object hoặc array thì ta không thể gán = object hoặc array khác mà chỉ có thể gán lại thuộc tính (object) hoặc phần tử (array) đó mà thôi.
*/
// let title = 'cybersoft';
// // let title = 'cybersoft 123';
// {
//     let title = 'cyberlearn';
//     console.log('title 1',title);
// }
// console.log('title 2',title);

// var btn = document.querySelector('#btn');
// btn.onclick = function () {
//     alert(btn.innerHTML);
// }

var arrButton = document.querySelectorAll('button');
console.log('arrButton', arrButton);

for (let index = 0; index < arrButton.length; index++) {
    //Mỗi lần duyệt lấy ra 1 button
    let btn = arrButton[index];
    let noiDungButton = btn.innerHTML;
    btn.onclick = function () {
        alert(noiDungButton);
    }
}

// {
//     //Mỗi lần duyệt lấy ra 1 button
//     let btn = arrButton[index];
//     let noiDungButton = btn.innerHTML;
//     btn.onclick = function() {
//         alert(noiDungButton);
//     }
// }

// {
//     //Mỗi lần duyệt lấy ra 1 button
//     let btn = arrButton[index];
//     let noiDungButton = btn.innerHTML;
//     btn.onclick = function() {
//         alert(noiDungButton);
//     }
// }

// {
//     //Mỗi lần duyệt lấy ra 1 button
//     let btn = arrButton[index];
//     let noiDungButton = btn.innerHTML;
//     btn.onclick = function() {
//         alert(noiDungButton);
//     }
// }


const DOMAIN = 'https://api.com.vn';

// DOMAIN = 'https://api.com.vn123';
const SETTING = {
    token: 'abcxyz',
    userLogin: 'khai@gmail.com'
}

SETTING.token = 'xxxyyy';
// SETTING = 'aaa0001'



/* 
    ---------------------------- function --------------------------------- 
    Arrow function: Khi thân hàm có 1 lệnh return thì ta khai báo arrow function bỏ chữ return và {}. Nếu hàm chỉ có 1 tham số thì (thamSo) => thamSo.
*/

// Khai báo function (declaration function) : Hỗ trợ cơ chế hoisting
// var showMess;
// showMess();

function showMess() {
    console.log('hello cyberosft');
}

//Khai báo function (expression function)
// showMessage();
var showMessage = function () {
    console.log('hello bc 16 frontend');
}
showMessage();

//Khai báo function es6: Giống expression function không hỗ trợ hoisting
var showMessageES6 = (name) => {
    return 'hello' + name + ' cybersoft 123';
}
showMessageES6();

var showMesES6 = name => 'hello' + name + ' cybersoft 123';
let getApiXoaSinhVien = id => 'https://svcy.myclass.vn/api/quanlysinhvien/xoaSinhVien?maSinhVien=' + id;

let api = getApiXoaSinhVien(5);


/*
    context con trỏ this
    Ngữ cảnh mặc định: this là window
    Ngữ cảnh object: this trong object => this là đối tượng (object) đó 
    Ngữ cảnh function: this sẽ là function hay prototype đó
    Khi this trong ngữ cảnh gần nhất không tìm thấy giá trị => trỏ về ngữ cảnh mặc định trong es5.
    Arrow function không có con trỏ this. Thường dùng để khai báo các hàm bên trong các phương thức của prototype hoặc object
*/

window.title = 'abc';
console.log('Chiều rộng', window.innerHeight);
console.log('Chiều dài', window.innerWidth);
// console.log(window)
// var title = 'abc';
// this.title = 'abc';
console.log(title);

let product = {
    id: 1,
    name: 'IPhone',
    price: 1000,
    showInfo: function () {
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('price', this.price);
    }
}
product.showInfo();

function SinhVien() {
    this.maSinhVien = '';
    this.hoTen = '';
    this.hienThiThongTin = function () {
        console.log('mã sinh viên', this.maSinhVien);
        console.log('họ tên', this.hoTen);
    }
}
let sv = new SinhVien();
sv.hoTen = 'A';
sv.hienThiThongTin();
let svB = new SinhVien();
svB.hoTen = 'B';
svB.hienThiThongTin();

//Xung đột ngữ cảnh
// var maSinhVien = '123';
var sinhVienCyber = {
    maSinhVien: 1,
    hoTen: 'Nguyễn Văn A',
    hienThiThongTin: function () {
        let hienThi = () => {
            // this.maSinhVien = 'abc';
            console.log('mã sinh viên', this.maSinhVien);
            console.log('Tên sinh viên', this.hoTen);
        }
        hienThi();
    }
}
sinhVienCyber.hienThiThongTin();


/*
    Bài tập 1: Thay đổi màu sác h3#home
    - Từ mảng màu đã cho tạo ra các nút button với các màu tương ứng tại div#colors
    - Xây dựng sự kiện xử lý cho nút button -> khi người dùng click vào h3#home sẽ thay đổi màu tương ứng
*/
let arrColor = ['red', 'green', 'blue', 'pink', 'silver', 'black', 'orange'];

let renderButton = () => {
    //Cách 1: Tạo ra từng button append vào giao diện
    // for(let index = 0; index <arrColor.length;index ++) {
    //     //Duyệt qua 1 phần tử thì tạo ra 1 button  
    //     let color = arrColor[index];
    //     let button = document.createElement('button');
    //     button.className = 'btn text-white ml-2';
    //     button.style.backgroundColor = color;
    //     button.innerHTML = color;
    //     button.onclick = function () {
    //         document.querySelector('#home').style.color = color;
    //     }
    //     document.querySelector('#colors').appendChild(button);
    // }
    //cách 2: Tạo ra 1 chuỗi html sau đó gán cho innerHTML của div#colors
    let contentHTML = '';
    for (let index = 0; index < arrColor.length; index++) {
        let color = arrColor[index];
        contentHTML += `
            <button style="background-color:${color};" class="btn text-white ml-2" onclick="changeColor('${color}')">${color}</button>
        `
    }
    document.querySelector('#colors').innerHTML = contentHTML;
}

window.changeColor = (color) => {
    document.querySelector('#home').style.color = color;
}
renderButton();


/* Default parameter : Tham số mặc định của hàm. Nếu gọi hàm không truyền tham số thì hàm sẽ lấy giá trị mặc định. Nếu truyền tham số thì sẽ thấy tham số mình truyền vào  */

let hienThiThongTinSV = (hoTen = 'Thanh', namSinh = 2000, tuoi = 2022 - namSinh) => {
    console.log('Họ tên: ', hoTen);
    console.log('Tuổi: ', tuoi);
}

hienThiThongTinSV();
hienThiThongTinSV('Khải', 1999);
hienThiThongTinSV('Khải', 1998, 20);

/*
    Rest Parameter
*/


// function tinhTong(a, b) {
//     console.log(a + b);
// }

// function tinhTong(a, b, c) {
//     console.log(a + b + c);
// }

function tinhTong(...restParam) { // [2,3] | [2,3,5]
    switch (restParam.length) {
        case 2: {
            console.log(restParam[0] + restParam[1]);
        }; break;
        case 3: {
            console.log(restParam[0] + restParam[1] + restParam[2]);
        }; break;
        default: {
            console.log('Tham số không hợp lệ!');
        }
    }

}

tinhTong(2, 3);
tinhTong(2, 3, 5);
tinhTong(2, 3, 5, 4, 3, 2);

/*
    Bài tập 2 : Tính điểm trung bình
*/

document.querySelector('#btnTinhDiemKhoi1').onclick = () => {
    var diemToan = Number(document.querySelector('#dToan1').value);
    var diemLy = Number(document.querySelector('#dLy1').value);
    var diemHoa = Number(document.querySelector('#dHoa1').value);

    document.querySelector('#dtbKhoi1').value = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
}


document.querySelector('#btnTinhDiemKhoi2').onclick = () => {
    var diemVan = Number(document.querySelector('#dVan2').value);
    var diemSu = Number(document.querySelector('#dSu2').value);
    var diemDia = Number(document.querySelector('#dDia2').value);
    var diemAnh = Number(document.querySelector('#dAnh2').value);
    document.querySelector('#dtbKhoi2').value = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemAnh);

}


let tinhDiemTrungBinh = (...restParam) => { // [2,3,4] | [2,4,5,6]
    //output:
    let diemTrungBinh = 0;
    for (var i = 0; i < restParam.length; i++) {
        diemTrungBinh += restParam[i];
    }

    return diemTrungBinh / restParam.length;
}


/*
    Spead Operator: Dùng để sao chép giá trị của 1 object hoặc array
    Các dữ liệu cơ sở (primitive value): number, string, boolearn, underfine, null thì không cần sử ụng spread operator
*/

let sinhVien1 = {id:5, name:'Nguyễn Văn A'};
let sinhVien2 = {...sinhVien1, address:'82 Ung Văn Khiêm', name:'Trần Văn B'};


console.log('sinhVien1', sinhVien1); //5
console.log('sinhVien2', sinhVien2); //10

let arr1 = [1,2,3,4,5];
let arr2 = [...arr1,6,...arr1];
// arr2.push(6);

console.log('arr1',arr1);
console.log('arr2',arr2);

/*
    DESTRUCTURING: Bóc tách các giá trị trong object hoặc mảng
*/

let product123 = {
    id:'001',
    name:'IPHONE',
    price: 1000,
    img: 'https://picsum.photos/200',
    showInfo: function(){
        console.log('show info');
    }
}

let {id, name, showInfo,...thuocTinhConLai} = product123;
console.log(thuocTinhConLai);

//Đối vs ARRAY: tuple
let productArray = [1, 'Iphone', 1000, function(){
    console.log('show info');
}];
let [idProcduct, nameProduct, priceProduct, showInfoProduct] = productArray;
showInfoProduct();
console.log('Tên sp', nameProduct);


/*Object literal: Sử dụng tên biến để tạo ra thuộc tính đồng thời gán giá trị cho thuộc tính đó */
let tenSanPham = 'IphoneX';
let maSP = 'IP0001';
let hienThiSP = function () {
    console.log(maSp);
    console.log(tenSanPham);
}

let iphone = {
    tenSanPham,
    maSP,
    hienThiSP
}
console.log(iphone);

/*Dyamic key: ES6 cho phép ng dùng truyền động tên thuộc tính
    let myObject = {
        key:value
    }
*/
let keyId = 'Mã SP';
let nameId = 'Tên SP'

let produc456 = {
    [keyId] : 1,
    [nameId] : 'Nguyễn Văn A'
}


let produc789 = {...produc456, ['price'] : 1000}
console.log(produc789[keyId]);


/*
    for of:
    for in:
*/

let arrProduct = [
    {id:1, name: 'Galaxy note 9', price: 1000},
    {id:2, name: 'Galaxy note 10', price: 1500},
    {id:3, name: 'Galaxy note 20', price: 2000},
]

//ES5
for (let i=0; i < arrProduct.length; i++) {
     let prod = arrProduct[i];
     console.log('Product', prod);
}

//ES6
//for of: Mỗi lần duyệt lấy ra 1 item trong mảng, chỉ duyệt mảng
for (let sp of arrProduct){
    console.log(sp);
}
//for in: Mỗi lần duyệt lấy ra index của phần tử trong mảng
//Đối với object ta có thể duyệt các thuộc (key) bằng for in
for (let sp in arrProduct) {
    console.log(arrProduct[sp]);
}



let product001 ={
    id: 1,
    name: 'galaxy',
    price: 1000
}

for (let tenThuocTinh in product001){
    console.log(tenThuocTinh, product001[tenThuocTinh]);
}



let arrProductObject = {
    '0000xxxx': {id:1, name: 'Galaxy note 9', price: 1000},
    '0000yyyy':{id:2, name: 'Galaxy note 10', price: 1500},
    '0000zzzz': {id:3, name: 'Galaxy note 20', price: 2000},
}

for (let maThuocTinh in arrProductObject) {
    console.log(maThuocTinh, arrProductObject[maThuocTinh]);
}