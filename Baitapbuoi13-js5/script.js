// 1. Viết hàm chuyển đổi capitalize
function capitalize(string) {
  let result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] == " ") {
      // kiểm tra xem trước ki tự nào có khoảng trắng thì kí tự đó chuyển thành in hoa
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
capitalize("bai tap javascript");

// 2. paramaterize
function paramaterize(string) {
  let result = string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] == " ") {
      result += "-";
    } else if (string[i - 1] == " " || string[i - 1] == "-") {
      result += string[i].toLowerCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
paramaterize("Đoạn Chữ Này Viết Liền");

/// 3. Loại bỏ khoảng trắng
function nospace(string) {
  string = string.replace(/^\s+|\s+$/g, "");
  string = string.replace(/\s+/g, " "); // stackoverflow
  return string;
}
nospace("     Hello          World!        ");

/// 4. Đảo ngược in thường và in hoa
function invert(string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
}
invert("INhOaiNtHuONg");

/// 5. Lặp chuỗi
function repeat(string) {
  string = string.repeat(4);
  return string;
}
repeat("Hoho");

/// 6. Chèn chuỗi vào vị trí chỉ định
function insert(str1, str2, index) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    if (i == index) {
      result += str2;
    }
    result += str1[i];
  }
  return result;
}
insert("ghikm", "l", 4);

/// 7. Rút gọn chuỗi
function shorten(string, a) {
  let result = "";
  for (let i = 0; i < a; i++) {
    result += string[i];
  }
  return result + "...";
}
shorten("chuoinaydai500m", 3);

// 8. Đếm số lần xuất hiện chuỗi con
function countStr(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2) {
      count++;
    }
  }
  return count;
}
countStr("abcacacaa", "a");

/// 9. Cắt chuỗi theo số từ
function split(string,number){
  let result = "";
      symbol = /,/gi;
  result += string.split(" ",number);
  newResult = result.replace(symbol," ");
  return newResult;
}
split("My name is Tuan",2);


/// 10. Random.
function random() {
  let GUID = "";
  for(let i = 0; i <= 32;i++){ // lặp 32 lần
    let n = Math.floor(Math.random() * (122));// random trong khoảng từ 0-122 
      if(n >= 34 && n<=122) { // giá trị alphabetical
      GUID += String.fromCodePoint(n); //in ra chuỗi với mã unicode vừa random ra
      }
  }
  return GUID;
}
random();


// 11. Thay thế kí tự liền sau
function replace(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += String.fromCodePoint(string.charCodeAt(i) + 1);
  }
  return result;
}
replace("acef");

// sort()
let arr = ["cat", "dog", "elephant", "bee", "ant"];
arr.sort((a, b) => { //Mặc định hàm sort sẽ chuyển phần tử về kiểu string rồi so sánh bằng function(a, b){return a - b}. Return value (negative, zero, positive)
  if (a > b) return 1; // Nếu a > b thì trả về giá trị dương khi đó b sẽ đc xếp trước a trong mảng
  if (a < b) return -1; // ngược lại
  return 0; // ko có gì thay đổi
});
console.log(arr);
/// sort này nếu áp dụng với mảng có phần tử số thì hiển thị chưa chính xác lắm vì nó chuyển về kiểu string rồi mới sắp xếp. Muốn sắp xếp mảng số thì dùng callback function khác.


// forEach()
// Cú pháp
function forEach(array, action){
  for(let i = 0; i < array.length; i++)
    action(array[i]);
}
// Hàm forEach nhận đầu vào là một mảng array và một hàm số action - thực hiện hành động đối với mỗi phần tử của mảng (array[i]).

// Ví dụ in ra nội dung của mảng
let arr = [1, 3, 5, 4]
function printContentArray(array) {
  // Với mỗi lần chạy qua phần tử trong mảng thì in ra phần tử đó
  array.forEach(function print(element){
    console.log(element);
  });
}
printContentArray([arr]);
