//Câu 1. Random
function random(a, b) {
  console.log(Math.floor(Math.random() * (b - a + 1)) + a);
}
random(0, 100);

// // // --
let random = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
random(0, 100);

// // Câu 2. Kiểm tra tam giác
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    // điều kiện của tam giác
    return "Tam giác hợp lệ"; //
  } else {
    return "Không phải là tam giác";
  }
}
isTriangle(4, 6, 8);
isTriangle(5, 2, 7);

// // // --
let isTriangle = (a, b, c) =>
  a + b > c && b + c > a && a + c > b
    ? "Tam giác hợp lệ"
    : "Không phải là tam giác";
isTriangle(4, 6, 8);

// // Câu 3. Đoán số
function guessNumber() {
  let count = 0;
  let random = Math.floor(Math.random() * 10) + 1;
  console.log(random);
  let n = +prompt("Đoán một số từ 0 đến 10");
  while (count < 3 && n != false && !isNaN(n)) {
    if (n == random) {
      alert("Â mây zing, gút chóp");
      break;
    } else {
      count++;
      n = +prompt("Sai rồi, đoán lại đi");
    }
  }
}
guessNumber();

// // --
let guessNumber = () => {
  let random = Math.floor(Math.random() * 10) + 1;
  console.log(random);
  let count = 0;
  let n = +prompt("Đoán một số từ 0 đến 10");
  while (count < 3 && n != false && !isNaN(n)) {
    if (n == random) {
      alert("Â mây zing, gút chóp");
      break;
    } else {
      count++;
      n = +prompt("Sai rồi, đoán lại đi");
    }
  }
};
guessNumber();

// // Câu 4. Tìm số gần 100 nhất
function nearest(a, b) {
  if (a != b) {
    let a1 = Math.abs(a - 100); //dùng math.abs vì trong trường hợp a, b < 100 thì kết quả sẽ âm khiến cho việc so sánh có thể gặp lỗi
    let b1 = Math.abs(b - 100);
    //Số nào trừ đi 100 có kết quả nhỏ hơn thì gần với 100 nhất.
    if (a1 < b1) {
      return a;
    } else if (b1 < a1) {
      return b;
    }
    return 0;
  } else {
    return "sai";
  }
}
nearest(34, 120);

// // --
let nearest = (a, b) => {
  if (a != b) {
    let a1 = Math.abs(a - 100);
    let b1 = Math.abs(b - 100);
    if (a1 < b1) {
      return a;
    } else if (b1 < a1) {
      return b;
    }
    return 0;
  } else {
    return "sai";
  }
};
nearest(34, 120);

// // // Câu 5. Kiểm tra chuỗi tăng dần hay giảm dần
function sequense(a, b, c) {
  if (a < b && b < c && a != c) {
    return "chuỗi tăng dần";
  } else if (a > b && b > c && a != c) {
    return "chuỗi giảm dần";
  } else {
    return "???";
  }
}
sequense(3, 4, 5);

// // --
let sequense = (a, b, c) =>
  a < b && b < c && a != c
    ? "Chuỗi tăng dần"
    : a > b && b > c && a != c
    ? "Chuỗi giảm dần"
    : "?????";
sequense(3, 4, 5);

// // Câu 6. Đếm số chữ số sau dấu phẩy
function countDecimal(number) {
  let decimal = (number + "").split(".")[1];
  return decimal.length;
}
countDecimal(4.12314);
countDecimal(7.684);

// // --
let countDecimal = (number) => {
  let decimal = (number + "").split(".")[1];
  return decimal.length;
};

// // Câu 7. Kiểm tra dãy số tăng hay giảm
function isAscending(number) {
  let numberStr = String(number);
  for (let i = 0; i < numberStr.length - 1; i++) {
    if (numberStr[i] > numberStr[i + 1]) {
      return "Không tăng dần";
    }
  }
  return "Tăng dần";
}
isAscending(123);
isAscending(321);

// // --
let isAscending = (number) => {
  let numberStr = String(number);
  for (let i = 0; i < numberStr.length - 1; i++) {
    if (numberStr[i] > numberStr[i + 1]) {
      return "Không tăng dần";
    }
  }
  return "Tăng dần";
};
isAscending(123);
isAscending(321);

// // Câu 8. Đếm chữ số chẵn

// // Câu 9.
function find(number) {
  let sum = 0;
  let n = 0;
  for (let i = 0; i < number; i++) {
    if (sum <= number) {
      sum += i;
      n = i - 1;
    }
  }
  return n;
}
find(7);
find(12);
find(35);

// // --
let find = (number) => {
  let sum = 0;
  let n = 0;
  for (let i = 0; i < number; i++) {
    if (sum <= number) {
      sum += i;
      n = i - 1;
    }
  }
  return n;
};
find(7);
find(12);
find(35);

// Câu 10. Đổi đơn vị
function sum(value1, unit1, value2, unit2) {
  let sum = 0;
  if (unit1 == "km") {
    unit2 == "km"
      ? (sum = value1 + value2 + "km")
      : unit2 == "m"
      ? (sum = value1 + value2 * 0.001 + "km")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 0.0001 + "km")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 0.00001 + "km")
      : (sum = value1 + value2 * 0.000001 + "km");
  } else if (unit1 == "m") {
    unit2 == "km"
      ? (sum = value1 + value2 * 1000 + "m")
      : unit2 == "m"
      ? (sum = value1 + value2 + "m")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 0.1 + "m")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 0.01 + "m")
      : (sum = value1 + value2 * 0.001 + "m");
  } else if (unit1 == "dm") {
    unit2 == "km"
      ? (sum = value1 + value2 * 10000 + "dm")
      : unit2 == "m"
      ? (sum = value1 + value2 * 10 + "dm")
      : unit2 == "dm"
      ? (sum = value1 + value2 + "dm")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 0.1 + "dm")
      : (sum = value1 + value2 * 0.01 + "dm");
  } else if (unit1 == "cm") {
    unit2 == "km"
      ? (sum = value1 + value2 * 100000 + "cm")
      : unit2 == "m"
      ? (sum = value1 + value2 * 100 + "cm")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 10 + "cm")
      : unit2 == "cm"
      ? (sum = value1 + value2 + "cm")
      : (sum = value1 + value2 * 0.1 + "cm");
  } else {
    unit2 == "km"
      ? (sum = value1 + value2 * 1000000 + "mm")
      : unit2 == "m"
      ? (sum = value1 + value2 * 1000 + "mm")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 100 + "mm")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 10 + "mm")
      : (sum = value1 + value2 + "mm");
  }
  return sum;
}
sum(15, "km", 475, "m");

// // --
let sum = (value1, unit1, value2, unit2) => {
  let sum = 0;
  if (unit1 == "km") {
    unit2 == "km"
      ? (sum = value1 + value2 + "km")
      : unit2 == "m"
      ? (sum = value1 + value2 * 0.001 + "km")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 0.0001 + "km")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 0.00001 + "km")
      : (sum = value1 + value2 * 0.000001 + "km");
  } else if (unit1 == "m") {
    unit2 == "km"
      ? (sum = value1 + value2 * 1000 + "m")
      : unit2 == "m"
      ? (sum = value1 + value2 + "m")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 0.1 + "m")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 0.01 + "m")
      : (sum = value1 + value2 * 0.001 + "m");
  } else if (unit1 == "dm") {
    unit2 == "km"
      ? (sum = value1 + value2 * 10000 + "dm")
      : unit2 == "m"
      ? (sum = value1 + value2 * 10 + "dm")
      : unit2 == "dm"
      ? (sum = value1 + value2 + "dm")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 0.1 + "dm")
      : (sum = value1 + value2 * 0.01 + "dm");
  } else if (unit1 == "cm") {
    unit2 == "km"
      ? (sum = value1 + value2 * 100000 + "cm")
      : unit2 == "m"
      ? (sum = value1 + value2 * 100 + "cm")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 10 + "cm")
      : unit2 == "cm"
      ? (sum = value1 + value2 + "cm")
      : (sum = value1 + value2 * 0.1 + "cm");
  } else {
    unit2 == "km"
      ? (sum = value1 + value2 * 1000000 + "mm")
      : unit2 == "m"
      ? (sum = value1 + value2 * 1000 + "mm")
      : unit2 == "dm"
      ? (sum = value1 + value2 * 100 + "mm")
      : unit2 == "cm"
      ? (sum = value1 + value2 * 10 + "mm")
      : (sum = value1 + value2 + "mm");
  }
  return sum;
};
sum(15, "km", 475, "m");
