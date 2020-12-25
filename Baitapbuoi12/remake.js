// Tạo object weapon và player
function Weapon(name, damage) {
  this.name = name;
  this.damage = damage;
}
function Player(name, weapon, level) {
  this.name = name;
  this.weapon = weapon;
  this.level = level;
  this.attack = function () {
    console.log("Player damage :" + this.weapon.damage * this.level);
  };
  this.changeWeapon = function (change) {
    this.weapon = change;
  };
}
let kiem = new Weapon("Kiếm", 35);
let riu = new Weapon("Rìu", 40);
let cung = new Weapon("Cung", 50);

let tuan = new Player("Tuấn", kiem, 20);
let nghia = new Player("Nghĩa", riu, 15);

tuan.attack();
tuan.changeWeapon(cung);
tuan.attack();
nghia.attack();

///////////////////////////////////////////////

let cal = {
  a: 0,
  b: 0,
  get(a, b) {
    this.a = a;
    this.b = b;
    return this;
  },
  add() {
    console.log("a + b = ", this.a + this.b);
    return this;
  },
  sub() {
    console.log("a - b = ", this.a - this.b);
    return this;
  },
  div() {
    console.log("a / b = ", this.a / this.b);
    return this;
  },
  mul() {
    console.log("a * b = ", this.a * this.b);
    return this;
  },
  rem() {
    console.log("a % b = ", this.a % this.b);
    return this;
  },
  exp() {
    console.log("a ** b = ", this.a ** this.b);
    return this;
  },
};
cal.get(5, 3).add().sub().mul().div().rem().exp();

//////////////////////////////////////////////////////
function Counter() {
  let count = 0;
  this.count = count;
  this.up = function () {
    this.count++;
    console.log("Count + 1: ", this.count);
    return this;
  };
  this.down = function () {
    this.count--;
    console.log("Count - 1: ", this.count);
    return this;
  };
  this.get = function () {
    console.log("Count: " + this.count);
    return this;
  };
}
let counter = new Counter();
counter.up().up().get().down().down().down().down();

////////////////////////////////////////////
function Boy(name, age, sexual) {
  this.name = name;
  this.age = age;
  this.sexual = sexual;
  this.hi = function () {
    console.log("Tao là " + this.name + " xe ôm");
  };
  this.threat = function () {
    console.log("Mày biết bố mày là ai không?");
  };
  this.ask = function () {
    console.log("Mày bao nhiêu tuổi? Tao " + this.age);
  };
  this.sorry = function () {
    console.log("Xin lỗi! Được chưa?");
  };
}

let nghia = new Boy("Nghĩa", 22, "Nam");
nghia.hi();

function Girl(name, age, sexual) {
  this.name = name;
  this.age = age;
  this.sexual = sexual;
  this.hi = function () {
    console.log("Xin chào! Tôi là " + this.name);
  };
  this.compliment = function () {
    console.log("Mới làm tóc à? Được đấy!");
  };
}
let trang = new Girl("Trang", 18, "Nữ");
trang.hi();
