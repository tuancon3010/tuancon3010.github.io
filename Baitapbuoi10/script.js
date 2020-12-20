// // Câu 1. VCT tính và in bảng cửu chương.
// function bct() {
//     for (i = 1; i <= 9; i++){
//         for (j = 1; j <= 10; j++){
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }
// bct()

// // Câu 2.
// function fibu() {
//     for (i = 0; i <= 100; i++){
//         console.log(i);
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log("BuzzFizz");
//         }
//     }
// }
// fibu()

// // Câu 3.
// function cau3() {
//     let sum = 0;
//     for (i = 0; i <= 1000; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum += i; // Tổng của i thoả mãn 2 đk trên
//         }
//     }
//     console.log(sum);
// }
// cau3()

// // Câu 4
// function isPrime() {
//   let n = +prompt("Nhap so");
//   let test = 1;
//   for (let i = 2; i < n / 2; i++) {
//     if (n % i === 0) {
//       test = 0;
//       break;
//     }
//   }
//   if (test === 1) {
//     console.log(n + " là số nguyên tố");
//   } else {
//     console.log(n + " không phải số nguyên tố ");
//   }
// }
// isPrime()

// // // Câu 5
// function printPrime() {
//     for (i = 0; i <= 1000; i++) {
//         let test = 1;
//         for (j = 2; j <= i /2; j++) {
//             if (i % j === 0) {
//                 test = 0;
//                 break;
//             }
//         }
//         if (test === 1) {
//             console.log(i + " là số nguyên tố");
//         } else {
//             console.log(i + " không phải số nguyên tố ");
//         }
//     }
// }
// printPrime()

// // Câu 6.
// function printPrime(a, b) {
//   for (i = a + 1; i < b;  i++) {
//     // khởi tạo dãy số từ a -> b
//     let test = 1;
//     for (j = 2; j <= i / 2; j++) {
//       if (i % j === 0) {
//         test = 0;
//         break;
//       }
//     }
//     if (test === 1) {
//       console.log(i + " là số nguyên tố");
//     }
//   }
// }
// // printPrime(a, b)              -------------- a, b là dãy số trong khoảng từ a -> b

// // câu 7. BCT ngược
// function bct() {
//     for (i = 9; i >= 1; i--){
//         for (j = 1; j <= 10; j++){
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }
// bct()

// // Câu 8
// function display_digit(number) {
//     let last_digit = number%10;

//     let first_digit = number;
//     while (first_digit >=10){
//         first_digit =(first_digit-(first_digit%10))/10;

//     }
//     document.write("chữ số đầu tiên của : " + number + " là : " + first_digit + "<br>");
//     document.write("chữ số cuối củng của : " + number + " là : " + last_digit + "<br>");
// }
// display_digit(1234);

// Đổi nhiệt độ





// // fibonaci
// function fibonacci() {
//   let a = +prompt("Nhập số lần in dãy fibonacci");
//   let b = 0;
//   let c = 1;
//   console.log(b);
//   console.log(c);
//   let d = 0;
//   for (let i = 2; i < a; i++) {
//     console.log((d = c + b));
//     b = c; // b lần lặp sau = c lần lặp trước
//     c = d; // c lần lặp sau = d lần lặp trước
//   }
// }
// fibonacci();






// // UCLN, BCNN
// function ucln() {
//   let a = +prompt("Nhập số thứ 1");
//   let b = +prompt("Nhập số thứ 2");
//   let c;
//   let d;
//   for (let i = 1; i <= a && i <= b; i++) { // i là bội của a và b nên ko đc lớn hơn, và lặp từ i = 1 đến số thứ 1 và số thứ 2
//     if (a % i == 0 && b % i == 0) { // tìm ucln
//       c = i;
//     }
//     d = (a * b) / c; // tìm bcnn
//   }
//   console.log(`"Ước chung lớn nhất: " ${c}`);
//   console.log(`"Bội chung nhỏ nhất: " ${d}`);
// }
// ucln()