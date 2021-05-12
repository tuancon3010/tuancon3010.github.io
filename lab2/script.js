class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        if (val.trim().length > 1) {
            this._name = val;
        } else {
            alert("Tên quá ngắn");
        }
    }
}

let ba = new User("Ba", 28);

console.log(ba);

ba.name = "";

console.log(ba);

ba.name = "Ba đẹp trai";

console.log(ba);

ba._name = "";

console.log(ba);
