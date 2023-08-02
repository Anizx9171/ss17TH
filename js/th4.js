class Mouse {
    constructor(name, weight, speed) {
        this.name = name
        this.weight = weight;
        this.speed = speed;
        this.alive = true;
    }
    Chit() {
        console.log(`${this.name} Chit chit lmao lmao burh burh`);
    }
    catAtk() {
        console.log(`${this.name} Ouch`);
    }
}
class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    meow() {
        console.log(`${this.name} meo meo`);
    }

    catchMouse(mouse) {
        if (this.speed > mouse.speed) {
            console.log(`${this.name} bắt chuột!`);
            mouse.alive = false;
        } else {
            console.log(`${this.name} Không bắt được chuột...`);
        }
    }

    eatMouse(mouse) {
        if (mouse.alive) {
            console.log(`${this.name} không thể ăn được chuột...`);
        } else {
            console.log(`${this.name} đã ăn được chuoorjt~`);
            this.weight += mouse.weight;
        }
    }
}
// Tạo đối tượng mèo
const cat = new Cat("Tom", 5, 20);

// Tạo đối tượng chuột
const mouse = new Mouse("Jerry", 1, 25);

// Mèo kêu
cat.meow();

//CHuột kêu
mouse.Chit()

// Mèo bắt chuột
cat.catchMouse(mouse);

//Chuột khi bị bắt
mouse.catAtk()

// In thông tin khối lượng của mèo sau khi ăn chuột
console.log(`${cat.name}'s weight: ${cat.weight}`);