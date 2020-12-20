// // 1. bt while do
// let sum = 0;
// let n = prompt("Nhập số");
// while (!isNaN(n) && n != null) {
//     sum += +n;
//     n = prompt("Nhập số");
// }
// console.log(sum);
// let sum = 0;
// let num = prompt("Nhap so:");

// console.log(num);
// console.log(!isNaN(num) && num != null);

// while (!isNaN(num) && num != null) {
//   sum += +num;
//   num = prompt("Nhap so:");
// }

// console.log(sum);

// // ví dụ tính tổng từ 1 đến 10. Copy vào console.
// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);

// // // ví dụ in ra i và j
// for (let i = 0, j = 10; i < j; i++, j--){
//     console.log(`i = ${i}, j = ${j}`);
// }

// // ví dụ tính tổng từ 0 đến 10000. Copy vào console.
// let sum = 0;
// for (let i = 0; i <= 10000; i++){
//     sum += i;
// }
// console.log(sum);

// // tính tổng các số lẻ từ 0 den 1000
// let sum = 0;
// for (let i = 0; i <= 1000; i++){
//     if (i % 2 != 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// // hoặc
// let sum = 0;
// for (let i = 1; i <= 1000; i+=2){
//         sum += i;
// }
// console.log(sum);

// // tính tổng các số lẻ chia hết cho 3 từ 0-1000
// let sum = 0;
// for (let i = 0; i <= 1000; i++){
//     if (i % 3 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// // hoặc
// let sum = 0;
// for (let i = 0; i <= 1000; i+=3){
//         sum += i;
// }
// console.log(sum);

// // Tính tổng các số lẻ chia hết cho cả 3 5 7 từ 0-1000;
// let sum = 0;
// for (let i = 0; i <= 1000; i++){
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
//         sum += i;
//     }
// }
// console.log(sum);

// viết function nhập vào 3 số in ra số lớn nhất
// function maxOfThree() {
//     let a = +prompt("Nhập số t1");
//     let b = +prompt("Nhập số t2");
//     let c = +prompt("Nhập số t3");
//     let max = a;
//     if (max < b) {
//         max = b;
//     }
//     if (max < c) {
//         max = c;
//     }
//     console.log(max);
// }
// // maxOfThree()

// Viết function nhập vào số lượng số bất kì và in ra số lớn nhất

// function Max() {
//     let n = +prompt("Nhập số");
//     max = n;
//     while (!isNaN(n) && n != null) {
//         if (max < n) {
//             max = +n;
//         }
//         n = +prompt("Nhập số");
//     }
//     console.log(max);
// }
// Max()

// // viết function nhập vào số và kiếm tra xem có phải số nguyên tố ko?
// function isPrime() {
//   let n = prompt("Nhap so");
//   let test = 0;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       test = 1;
//       break;
//     }
//   }
//   if (test === 0) {
//     console.log("La so nguyen to");
//   } else {
//     console.log("Khong phai so nguyen to ");
//   }
// }

// cách 2- dùng tham số
function prime(n) {
  let check = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      check = false;
    }
  }

  check
    ? console.log(n + " là số nguyên tố")
    : console.log(n + " không phải số nguyên tố");
}

function printPrime(n = 100) {
  for (let i = 0; i <= n; i++) {
    prime(i);
  }
}
