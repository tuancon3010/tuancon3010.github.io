// reduce
let arr = [
  { name: "Ba", age: 29 },
  { name: "Bon", age: 3 },
];

arr._reduce = function (callback, initial) {
  let accu = initial;
  for (let i = 0; i < this.length; i++){
    accu = callback(accu, this[i]);
  }
  return accu;
}
arr._reduce((sum, i) => (sum += i.age), 0);

// 1. tính trung bình cộng các phần tử
let arr = [10, 23, 4, 52];
tbc = function () {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
tbc();
// 2. tìm index của 1 số trong mảng
let arr = [1, 5, 3, 7, 9, 6];

let find = function (arr, value) {
  //   return arr.indexOf(value); // Cái này chạy rồi
  for (i = 0; i <= arr.length; i++) {
    if (value == arr[i]) {
      return i;
    }
  }
  return -1;
};
find(arr, 5);

// 3. Viết hàm sao chép mảng
let arr = [1, 3, 5, 7, 9];
let arr2 = [1, 5, 3, 7, 9, 6];
let copy = function (array) {
  let copyof = [];
  for (let i = 0; i < array.length; i++) {
    copyof.push(array[i]);
  }
  return copyof;
};
copy(arr);
copy(arr2);

// 4. Tìm số lớn nhất
let arr = [10, 23, 4, 52];
function findmax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
findmax(arr);

// 6. tim so lon thu 2
let arr = [1,50,156,314,5]
function secondMax(arr) {
    let snd = arr[arr.length - 1];
    for(let i = arr.length - 1;i >= 0;i--) {
        if(arr[i] < snd) {
            snd = arr[i];
            break;
        }
    }
    return snd;
}
secondMax(arr);

// 8. Tìm số lần xuất hiện lớn nhất trong mảng

// 9. cắt chuỗi thành một mảng có độ dài chỉ định. VD “Hello”, 2 => [“He”, “ll”, “o”]
let cut = (string, len) => {
    let newArr = [];
    for (let i = 0, j = 0; i <= string.length; i += len, j++) {
        newArr[j] = string.slice(i, i + len)
    }
    return newArr
}
cut("anbxcnmzbxcnmzxbcnmzxcnmzxmcb", 4)


// 15. Loại bỏ giá trị false
let arr = [null, 1, 0, NaN, true];
let findtrue = function (array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
      if (Boolean(array[i]) == true) // if(array[i]) // mặc định giá trị sẽ chuyển về kiểu boolean
      {
      newarr.push(array[i]);
    }
    }
    return newarr;
};
findtrue(arr);


