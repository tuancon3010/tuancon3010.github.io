function hello() {
  alert("Amazing");
}
let p2 = document.getElementById("hover");
function color() {
  p2.style.color = "red";
}
function normal() {
  p2.style.color = "none";
}

///
let p = document.getElementById("p");
p.onmouseover = function () {
  this.classList.toggle("red");
};
p.onmouseout = function () {
  this.classList.toggle("red");
};

////////
let p3 = document.getElementById("p3");
var hello = function () {
  alert(this.textContent);
};
var hello2 = function () {
  alert("hello");
};
var hello3 = function () {
  alert("hello 3");
};
p3.addEventListener("click", hello);
p3.addEventListener("click", hello2);
p3.addEventListener("click", hello3);

p3.addEventListener(
  "click",
  () => {
    alert("LOL");
  },
  { once: true }
);

/// Sự kiện bấm nút
document.body.onkeyup = (ev) => {
  alert(ev.currentTarget);
  alert(ev.type);
  alert(ev.keyCode);
}

document.body.firstElementChild.onclick = (e) => {
  alert(e.currentTarget);
  alert(e.type);
}