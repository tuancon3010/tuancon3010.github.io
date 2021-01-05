// Todolist
let todos = [
  { id: 1, title: "Coding", completed: false },
  { id: 2, title: "Xem bắn pháo hoa", completed: false },
  { id: 3, title: "Giao bài tập cho lớp FE12", completed: true },
  { id: 4, title: "Đòi nợ Thảo 10$", completed: false },
  { id: 5, title: "Dọn nhà", completed: true },
  { id: 6, title: "Ngủ", completed: false },
  { id: 7, title: "Nấu cơm", completed: false },
  { id: 8, title: "Đi học", completed: true },
  { id: 9, title: "Ngủ", completed: true },
  { id: 10, title: "Ngủ", completed: true },
  // add more
];

// Từ todolist trên render ra trang HTML theo mẫu trong ảnh

// event cho nút +
function createCheckbox(id, title, checked = true) {
  let div = document.createElement("div");
  let input = document.createElement("input");
  input.type = "checkbox";
  input.name = id;
  input.id = id;
  if (checked) {
    input.checked = true;
  }
  input.addEventListener("click", handleCheckbox);
  div.append(input);
  div.append(title);
  return div;
}
function handleCheckbox() {
  todos.forEach((i) => {
    if (this.id == i.id) {
      i.completed = true;
    }
  });
  createTodoList();
}
// Thêm công việc
function createTodoList() {
  complete.lastElementChild.innerHTML = "";
  doing.lastElementChild.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) {
      complete.lastElementChild.append(
        createCheckbox(todos[i].id, todos[i].title)
      );
    } else {
      doing.lastElementChild.append(
        createCheckbox(todos[i].id, todos[i].title, false)
      );
    }
  }
}
createTodoList();

add.addEventListener("click", handleClick);
let listDoing = Array.from(doing.getElementsByTagName("input"));
function handleClick() {
  if (this.previousElementSibling.value != "") {
    todos.push({
      id: todos.length + 1,
      title: this.previousElementSibling.value,
      completed: false,
    });
    doing.lastElementChild.append(
      createCheckbox(todos.length, this.previousElementSibling.value, false)
    );
  } else {
    alert("Type something you want to do!!!");
  }
}
