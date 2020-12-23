// fibo
let fibo = (n) => (n == 0 || n == 1 ? n : fibo(n - 1) + fibo(n - 2));

//giai thua
let giaithua = (n) => (n == 0 || n == 1 ? 1 : giaithua(n - 1) * n);

// // luy thua
// let luythua = (a, b) => {
//   if (a == b) {
//     return true;
//   } else {
//     while (a <= b) {
//       a /= b;
//     }
//   }
//   return a == b ? true : false;
// };


// tinh luy thua cua a va b


// // so nguyen to
// let isPrime = (n) => {
//     if (n < 2) {
//         return false;
//     } else {
//         for (let i = 2; i <= n / 2; i++) {
//             if (n % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }


// // OBJECT
// let tuan = {
//     name: "Tuan",
//     age: 22,
//     job: "dev",
//     // mobile: mobile,
// };

// let mobile = newObject(
//     mobile.brand = "iPhone";
// mobile.version = "7 Plus";
// mobile.phoneNumber = "19001001";
// );


// let key = prompt("nhap key");
// let value = prompt("nhap value");
// console.log(key);
// console.log(value);
// let object = {};
// object[key] = value;
// console.log(object);

let key = prompt("nhap key");
let value = prompt("nhap value");

let obj = {};
console.log(obj);

while (key != "" && key != null) {
    obj[key] = value;
    console.log(obj);
    key = prompt("Nhap key tiep");
    value = prompt("nhap value tiep");
}
console.log(obj);