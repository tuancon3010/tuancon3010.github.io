// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8

// 2. Style cho các từ có độ dài lớn hơn 8 trong p1

// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!

// 4. Thêm src, alt, href cho ảnh, link

// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"

//
let p1 = document.getElementById("p1").innerHTML;
let p2 = document.getElementById("p2").innerHTML;
let arr1 = p1.split(/(?:,| )+/);
let arr2 = p2.split(/(?:,| )+/);
function countword(array1, array2) {
  let count = 0;
  for (i = 0, j = 0; i < array1.length - 1, j < array2.length - 1; i++, j++) {
    if (array1[i].length > 8) {
      count++;
    }
    if (array2[i].length > 8) {
      count++;
    }
  }
  return `Có tổng cộng ${count} từ có độ dài > 8`;
}
countword(arr1, arr2);

/////////////
document.getElementById("image").src = "img.png";
document.getElementById("image").alt = "Girl xinh";
document.getElementById("link").href =
  "https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Sad-300x300.png";

/////////////
// let randomrow1 = Math.floor(Math.random() * 4) + 1
// let randomrow2 = Math.floor(Math.random() * 4) + 1
// let randomrow3 = Math.floor(Math.random() * 4) + 1
// let randomrow4 = Math.floor(Math.random() * 4) + 1

let table = document.getElementById("table");
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[Math.floor(Math.random() * 4)].style.backgroundColor =
    "red";
}

setInterval(function () {
  window.location.reload();
}, 2000);
