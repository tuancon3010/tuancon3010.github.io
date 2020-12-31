// let table = document.body.firstElementChild;
// for (let i = 0; i < table.rows.length; i++) {
//     table.rows[i].cells[i].style.backgroundColor = "red";
// }

let red = document.querySelectorAll(".red");
for (let i = 0; i < red.length; i++) {
  red[i].style.backgroundColor = "red";
}

let dongho = setInterval(() => {
  let date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleString("vi-VN");
}, 1000);
////////////////////////////////
let user = {
  name: "Tuan",
  age: 22,
};

let el = document.getElementById("user").children;
el = Array.from(el);

el.forEach((e) => {
  e.innerText = user[e.dataset.prop];
});