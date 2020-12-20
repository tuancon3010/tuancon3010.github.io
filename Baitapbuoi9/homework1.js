// // Câu 1-part 1. Tính chu vi và diện tích hình chữ nhật
// let w = +prompt("Nhập chiều dài");
// let h = +prompt("Nhập chiều rộng");
// console.log("Chu vi =", (w + h) * 2);
// console.log("Diện tích =", w * h);


// // Câu 2-part 1. Tính chu vi và diện tích hình tròn
// let a = +prompt("Nhập bán kính");
// console.log("Chu vi = ", (a * 2) * 3.14);
// console.log("Diện tích = ", (a ** 2) * 3.14);


// // Câu 3-part 1. Tính nghiệm của pt ax + b = 0
// let a = +prompt("Nhập a");
// let b = +prompt("Nhập b");
// if (a == 0) { //Nếu a = 0
//     if (b == 0) {
//         console.log("Pt vô số nghiệm"); //Nếu b = 0
//     }
//     else if (b !== 0) {
//         console.log("Pt vô nghiệm"); //Nếu b != 0
//     }
// }
// else{ //Nếu a != 0
//     console.log("Pt có nghiệm x =", -b / a);
// }

// // Câu 4-part 1. Đổi cm ra mm, m, km
// let a = +prompt("Nhập số cm");
// console.log(`${a} cm =`, (a * 10), 'mm');
// console.log(`${a} cm =`, (a / 100), 'meters');
// console.log(`${a} cm =`, (a / 100000), 'kilometers');

// // Câu 5-part1. Đổi °C ra °F và °K
// let a = +prompt("Nhập °C");
// console.log(`${a} °C =`, (a + 32), '°F');
// console.log(`${a} °C =`, 'Sấp xỉ', (a + 273.1), '°K');


// // // Câu 6-part1. Nhập số phút tính giờ/phút

// let a = +prompt("Nhập số phút");
// let b = Math.floor( a / 60); //tính số giờ chẵn(bỏ qua số phút dư)
// let c = a % 60; // tính sổ phút dư ra của 1 giờ nếu số phút nhập vào >60
// let d = (`${a} phút =`, b + 'h:' + c + 'p'); // Giờ:phút
// alert(d);



// -------------------------------------------------


// // Câu 1-part2. Nhập 3 số, in ra số lớn nhất
// let a = +prompt("Nhập số thứ nhất");
// let b = +prompt("Nhập số thứ hai");
// let c = +prompt("Nhập số thứ ba");
// let max = a; //gán giá trị của a là số lớn nhất
// if (max < b) { // Nếu a < b thì số lớn nhất sẽ gán cho b
//     max = b;
// } else if (max < c) { //Nếu b < c thì số lớn nhất sẽ gán cho c
//     max = c;
// }
// alert("Số lớn nhất là" + " " + max); // Trả về giá trị sau khi so sánh

// // Câu 2-part2. Nhập 1 số, kiểm tra xem có chia hết cho 5 vs 11 ko
// let a = +prompt("Nhập 1 số");
// if (a % 5 == 0) {
// }    if (a % 11 == 0) {
// alert("a chia hết cho 5 và 11")    
// }
// else {
//     alert("a không chia hết cho 5 và 11")
// }

// // Câu 3-part2. Nhập 1 năm, kiểm tra xem năm đó có phải năm nhuận ko
// let a = +prompt("Nhập năm");
// if (a % 4 == 0) {
//     alert(`Năm ${a} là năm nhuận`);
// }    else{
//         alert(`Năm ${a} không phải là năm nhuận`);
//     }

// // Câu 4-part2. Nhập 1 kí tự, kiểm tra xem có thuộc alphabet ko
// let a = prompt("Nhập 1 kí tự");
// let b = (a.charCodeAt(0)); // đặt giá trị ASCii của kí tự là b
// if (b >= 65 && b <= 90) { //so sánh giá trị ASCii của kí tự với giả trị của bảng chữ cái in hoa
//     alert("Kí tự vừa nhập thuộc alphabet");
// } else if (b >= 97 && b <= 122) { //so sánh giá trị ASCii của kí tự với giả trị của bảng chữ cái thường
//     alert("Kí tự vừa nhập thuộc alphabet");
// } else {
//     alert("Kí tự vừa nhập KHÔNG thuộc alphabet");
// }

// Câu 5-part2. Nhập 1 kí tự, kiểm tra nguyên âm hay phụ âm

// // Câu 6-part2. Nhập 1 kí tự, kiểm tra in hoa hay in thường
// let a = prompt("Nhập 1 kí tự");
// let b = (a.charCodeAt(0));
// if (b >= 65 && b <= 90) {
//     alert("Kí tự vừa nhập là in hoa");
// } else if(b >= 97 && b <= 122){
//     alert("Kí tự vừa nhập là in thường");
// }

// // Câu 7-part2. Giải pt bậc 2
// let a = +prompt("Nhập giá trị của a");
// let b = +prompt("Nhập giá trị của b");
// let c = +prompt("Nhập giá trị của c");
// let d = (b * b) - 4 * (a * c);
// let e = -b / (2 * a);
// let d1 = -b + Math.sqrt(d) / (2 * a);
// let d2 = -b - Math.sqrt(d) / (2 * a);
// if (d < 0) {
//     alert("PT vô nghiệm");
// } else if (a == 0) {
//     alert(`PT có nghiệm kép: ${e}`)
// } else {
//     alert(`Pt có 2 nghiệm x1 = ${d1}, x2 = ${d2}`)
// }

// Câu 8. Đổi hệ điểm ra chữ