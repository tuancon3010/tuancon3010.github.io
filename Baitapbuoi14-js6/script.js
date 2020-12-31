// Loại bỏ số trùng lặp
let arr = [1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4];
function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    // vòng lặp
    if (newArr.indexOf(array[i]) == -1) {
      // Những phần tử lặp sẽ ko tìm thấy index, giá trị trả về là -1
      newArr.push(array[i]); //
    }
  }
  return newArr;
}
console.log(unique(arr));

// in ra Fibonacci trong mảng
function fibo(n) {
  let a = 0,
    b = 1,
    c = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    c = b + a;
    a = b;
    b = c;
    arr.push(c);
  }
  return arr;
}
fibo(8);

// in ra các phần tử trùng nhau trong 2 mảng
let arr = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let newArr = [];
function duplicate(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if ((arr1[i] = arr2[i])) {
        newArr.push(arr1[i] && (arr2[i]));
    }
  }
  return newArr;
}
duplicate(arr, arr2)
