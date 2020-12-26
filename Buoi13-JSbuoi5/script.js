// Viết hàm tạo 1 số ngẫu nhiên từ 0-n
// Viết hàm chuyển đổi từ hệ cơ số này sang hệ cơ số khác
// Viết hàm tạo mốt số ngẫu nhiên trong khoảng từ a - b
// Viết hàm tạo mã màu HEX ngẫu nhiên

let random = (n) => {
  return Math.floor(Math.random() * (n - 0 + 1));
};
/////////////
function convert(a, b, c) {
  return parseInt(a, b).toString(c);
}
////////////
let random = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1));
};
/////////
function hex() {
  // return Math.floor(Math.random) * 255).toString(16) + Math.floor(Math.random) * 255).toString(16) + Math.floor(Math.random) * 255).toString(16)
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Viết hàm cắt chuỗi từ vị trí đầu tiên, tới vị trí chỉ định. VD: abcd, 2 => abc
// Viết hàm chuyển đổi 1 tên thành tên viết tắt. VD: "Ba Nguyễn" => "Ba N"
// Viết hàm ẩn địa chỉ email. VD: zxcvbnm@gmail.com => zx...@gmail.com

function cut(string, num) {
  return string.slice(0, num);
  // "abcdef".substr(0, 3)// cắt chuỗi từ 0 đến độ dài 3 kí tự
}

////// viết tắt tên
function nickname(string) {
  let space = string.indexOf(" ");
  return string.slice(0, space + 2) + ".";
}
////// ẩn email
function emailhidden(str) {
  let symbol = str.indexOf("@");
  return str.slice(0, 2) + "..." + str.slice(symbol);
}
//////// đổi chuỗi thành kí tự liền sau
function change(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += String.fromCodePoint(string.charCodeAt(i) + 1);
  }
  return result;
}
/////// chuyển in hoa thành in thường và ngược lại
let changeString = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
};

/////////////
let arr = [1, 2, 3, 4, 5, 6]; // khai báo mảng
arr[0]; // lấy giá trị trong mảng
arr[6] = 7; // thêm giá trị trong mảng
arr[arr.length] = x; //thêm giá trị vào cuối mảng

/*
Viết hàm arr._concat(arr2) gộp các phần tử của mảng arr2 vào arr1
Viết hàm arr._push(value) thêm giá trị vào cuối mảng
Viết hàm arr._pop() xoá phần tử cuối mảng, đồng thời trả về giá tri của phần tử bị xoá
Viết hàm arr._indexOf(value) tìm và trả về index của phần tử, nếu ko có trả về -1
Viết hàm arr._reverse() đảo ngược giá trị mảng
*/
let arr1 = ["abc", "def", "ghi"];
let arr2 = ["klm", "nop", "qrs"];
arr1.concat(arr2);

arr._concat = function (arr2) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[result.length] = this[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result[result.length] = arr2[i];
  }
  return result;
};
arr._concat(arr2);
///////////
let arr = [1, 2, 3];
arr._push = function (value) {
  this[this.length] = value;
  return this;
};
arr._push("alo");
///////////
let arr = [1, 2, 3];
arr._pop = function (value) {
  let poppedElem = this[this.length - 1];
  this.length;
  return this;
};
arr._pop(3);

///////////
let arr = [1, 2, 3];
arr._indexOf = function (value) {
  let idx = -1;
  for (let i = 0; i < this.length; i++) {
    if (value == this[i]) return i;
  }
  return idx;
};
//////////
let arr = [1, 2, 3, 4, 5];
arr._reverse = function () {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};
///////////////////////////////////
arr = [1, 6, 3, 9, 2, 9, 8, 4, 3, 7, 10, 5, 2];
arr.sort((a, b) => a - b); // sắp xếp tăng dần
arr.sort((a, b) => b - a); // sắp xếp giảm dần

///////////////////
let arr = [1, 2, 3, 4, 5];
arr.forEach((i) => console.log(i * 3));

function _for