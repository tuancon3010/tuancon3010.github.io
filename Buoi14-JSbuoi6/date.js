date = new date();

date.toLocaleString("vi-VN");

// 2. In ra thứ viết tắt tương ứng với ngày hiện tại
let date = new Date();
let thu = date.getDay();
if (thu == 0) {
  console.log("CN");
}
if (thu == 1) {
  console.log("T2");
}
if (thu == 2) {
  console.log("T3");
}
if (thu == 3) {
  console.log("T4");
}
if (thu == 4) {
  console.log("T5");
}
if (thu == 5) {
  console.log("T6");
}
if (thu == 6) {
  console.log("T7");
}


// 4. Trả về số ngày trong tháng bất kỳ
function numOfDaysInMon(y, m) {
    return new Date(y, m, 0).getDate();
}
numOfDaysInMon(2020, 02);

// Tính số ngày còn lại cho đến Tết dương lịch
function dayleft(params) {
    let now = new Date();
    let newYear = new Date(now.getFullYear() + 1, 0, 1);
    console.log(now);
    console.log(newYear);
    let ms = newYear.getTime() - now.getTime()
    console.log(Math.floor(ms / (1000 * 60 * 60 * 24)) +" Ngày");

}
dayleft()