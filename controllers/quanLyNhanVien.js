/*
    Các tính năng ES6 Sử dụng trong bài
    for of, destructuring object, spread operator, dynamuic key, for in, string template
*/

document.getElementById('btnXacNhan').onclick = function () {
    let arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien select');
    let nhanVien = {};
    for (let input of arrInput) {
        let {id,value} = input;
        nhanVien = {...nhanVien,[id]:value}
        // console.log(id);
        // console.log(value);
    }
    // console.log(nhanVien);
    let htmlNhanVien = '';
    for (let key in nhanVien) {
        htmlNhanVien += `
            <tr>
            <th>${key}</th>
            <th>${nhanVien[key]}</th>
            </tr>
        `
    }
    document.querySelector('tbody').innerHTML = htmlNhanVien;
}

//Hiển thị thông tin ra giao diện
// nhanVien = {maNhanVien: '1', tenNhanVien:'Nguyễn Văn A', chucVu: 'Giám đốc',...}


/*
output:
`<tr>
    <th>key</th>
    <th>value</th>
</tr>
*/



//import: là cú pháp cho phép file export được sử dụng ở file hiện tại

import {NhanVien,arr, DOMAIN} from "../models/NhanVien.js";

//inport default: có thể đổi tên từ file export được và nhớ không có dâu {}
import NhanVienABC from '../models/NhanVien.js'

let nv = new NhanVien();
console.log('nhanVien', nv);

let nhanVien = new NhanVienABC ();
console.log('nv', nhanVien);
