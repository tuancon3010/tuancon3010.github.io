// document.createElement("tag");

let img = document.createElement("img");
img.src =
  "https://kenh14cdn.com/thumb_w/600/2019/photo1568383944338-1568383944436-crop-1568383961901638380479.jpg";
img.alt = "meow";

// Thêm phần tử
var imgclone = img.cloneNode(true);
// document.body.append(img);
// document.body.insertAdjacentText("afterbegin", "<span>sdf</span>")
document.body.insertAdjacentElement("afterbegin", img);
document.body.insertAdjacentElement("beforeend", imgclone);

// xoá phần tử
// document.body.removeChild(imgclone);
imgclone.remove();

// ///
// var todos = ["eat", "play"];
// function createList() {
//   let fr = new DocumentFragment();
//   todos.forEach(function (i) {
//     var li = document.createElement("li");
//     li.textContent = i;
//     fr.append(li);
//   });
//   return fr;
// }
// let list = new Element()
// list.append(createList());

//
let p = document.getElementById("p");
p.classList.add("demo");

// p.style.cssText = `
// color: red;
// background-color: tomato;
// `

console.log(p.style.fontSize);
var css = getComputedStyle(p);
console.log(css.fontSize);

var c = getComputedStyle(p, ":hover");
console.log(c.color);