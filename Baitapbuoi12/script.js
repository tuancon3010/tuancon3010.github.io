// câu 1. Tạo object weapon
function Weapon(wname, wdamage, weight) {
  (this.wname = wname), (this.wdamage = wdamage), (this.weight = weight);
}
let kiem = new Weapon("Kiếm", 30, 5);
let riu = new Weapon("Rìu", 35, 6);
let cung = new Weapon("Cung", 40, 10);
let giao = new Weapon("Giáo", 50, 12);
////////////////////////////////////////////////////////////////////////
function Player(pname, plevel, psex, pweapon) {
  (this.pname = pname),
    (this.plevel = plevel),
    (this.psex = psex),
    (this.pweapon = pweapon),
    function attack() {
      return ("Damage: " + Weapon.wdamage * Player.plevel);
    };
}

let ba = new Player("Ba", 100, "male", kiem); //// how to lấy giá trị ở trên xuống? T.T
let ba1 = new Player("Ba", 100, "male", "kiem");
let ba2 = new Player("Ba", 100, "male", Weapon.kiem);