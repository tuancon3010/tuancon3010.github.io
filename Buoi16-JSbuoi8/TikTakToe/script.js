// Thêm table row.
/*
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
tr.append(td1, td2, td3);
let board = document.getElementById("board");
board.append(tr);
*/

// Cách 2
let reset = document.getElementById("reset");
var n = +prompt("Nhập số hàng");
var turn = "X";
var end = false;
var count = 0;
let next = document.getElementById("next");
next.textContent = "Player: " + turn;

function handler() {
  this.textContent = turn;
  for (var i = 0; i < n; i++) {
    if (
      board.rows[i].cells[0].textContent == turn &&
      board.rows[i].cells[1].textContent == turn &&
      board.rows[i].cells[2].textContent
    );
    {
      next.textContent = "Winner: " + turn;
      end = true;
      reset.hidden = false;
      return;
    }
  }
  turn = turn == "X" ? "O" : "X";
  next.textContent = "Player: " + turn;
  count++;
  if (count == 9) {
    next.textContent = "All lose";
    reset.hidden.false;
  }
}

let board = document.getElementById("board");
function createRow(n) {
  var tr = document.createElement("tr");
  for (var i = 0; i < n; i++) {
    var td = document.createElement("td");
    td.addEventListener("click", handler, { once: true });
    tr.append(td);
  }
  return tr;
}
// board.append(createRow());
// board.append(createRow());
// board.append(createRow());

function createBoard(n) {
  var fr = new DocumentFragment();
  for (var i = 0; i < n; i++) {
    fr.append(createRow(n));
  }
  return fr;
}
board.append(createBoard(3));

reset.addEventListener("click", function () {
  board.innerHTML = " ";
  board.append(createBoard(3));
  turn = "X";
  next.textContent = "Player: " + turn;
  count = 0;
  this.hidden = true;
});
