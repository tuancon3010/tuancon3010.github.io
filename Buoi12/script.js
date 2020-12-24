let user = {};
// "name" in user;
user.name = "Tuan";
"name" in user;

let key = "age";
user[key] = 22;
key in user;
//////

let user = {
  name: "Tuan",
  age: 22,
  job: "Dev",
  address: "Nguyen Trai",
};
for (let key in user) {
  console.log(key + ": " + user[key]);
}
///////////////

let user = {};
let copy = user;
user = copy;
let other = {};
user = other;
///////////

let obj = {
  name: "Tuan",
  age: 22,
};
let copy = obj;
copy.name = "Changed";
obj.name;
function demo(obj) {
  obj.name = "Changed";
}
let user = { name: "Tuan" };
demo(user);
user.name;

// ví dụ 1: Thay đổi giá trị của object = bình phương

let obj = {
  a: 2,
  b: 3,
  c: "c",
};
function double(object) {
  for (let property in object) {
    if (typeof object[property] == "number") {
      object[property] **= 2;
    }
  }
}
double(obj);
obj;
//////////////////////////////

// ví dụ 2: clone 1 object

let obj = {
  a: 2,
  b: 3,
  c: "c",
};
let clone = {};
function copy(target, source) {
  for (let property in source) {
    target[property] = source[property];
  }
}
copy(clone, obj);
////////////////////

// Kết hợp 2 ví dụ trên. Vừa copy vừa bình phương giá trị

let obj = {
  a: 2,
  b: 3,
  c: "c",
};
let clone = {};
function copy(target, source) {
  for (let property in source) {
    target[property] = source[property];
    if (typeof target[property] == "number") {
      target[property] **= 2;
    }
  }
  console.log(target);
  console.log(source);
}
copy(clone, obj);
///////////////////

let obj = {
  name: "Tuan",
  hi() {
    console.log("Hello, abcxyz");
  },
  bye() {
    console.log("Bye");
  },
  other() {
    console.log("Other");
  },
  f() {
    console.log(obj.name);
  },
};

let obj = {
  name: "Tuan",
  hi() {
    console.log(this.name);
  },
  bye() {
    console.log("Bye");
  },
  other() {
    console.log("Other");
  },
  f() {
    console.log(obj.name);
  },
};
let cop = obj;

//////

let obj = {
  name: "Tuan",
  age: 22,
};
let abc = {
  name: "Nghia",
  age: 22,
};
function hi() {
  console.log("Hello, name's " + this.name);
}
function tuoi() {
  console.log("I'm " + this.age);
}
obj.hi = hi;
abc.hi = hi;
obj.tuoi = tuoi;
abc.tuoi = tuoi;

//////////////
let user = {
  name: "Tuan",
  age: 22,
  hi() {
    console.log("Hello, my name is " + this.name);
  },
  getKeys() {
    for (let k in this) {
      console.log(k);
    }
  },
  getValues() {
    for (let k in this) {
      console.log(this[k]);
    }
  },
};
////////////////
let user = {
  name: "Tuan",
  // demo: () => console.log(this.name),
  demo() {
    return () => console.log(this.name);
  },
  test() {
    console.log(this.name);
  },
};

//////////////
function Person(name, age) {
  (this.name = name),
    (this.age = age),
    (this.hi = function () {
      console.log("Hello, name's " + this.name);
    });
}
let tuan = new Person("Tuan", 22);
let nghia = new Person("Nghia", 22);
