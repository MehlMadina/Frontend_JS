class Dog {
  constructor(name) {
    this.name = name;
  }

  hi() {
    // console.log(this);
    console.log("hi " + this.name);
  }
}

const dog_1 = new Dog("Бобик");
const dog_2 = new Dog("Шарик");

// dog_1.init('Бобик');
// dog_2.init('Шарик');

dog_1.hi();
dog_2.hi();

class User {

    static _roles = ["manager", "admin", "root", "guest"];

    static add_role(new_role){
        this._roles.push(new_role);
    }

  constructor(name, username, age, role = "guest") {
    this.name = name;
    this.username = username;
    this.age = age;
    this.change_role(role);
  }

  hi() {
    const { name, username, age, role } = this;
    console.log(`Hi ${name} ${username} ${age} ${role}`);
  }

  b_day() {
    this.age += 1;
  }

  change_name(new_name) {
    this.name = new_name;
  }

  change_role(new_role) {

    if (User._roles.includes(new_role)) {
      this.role = new_role;
    } else {
      this.role = null;
    }
  }
};

const user_1 = new User("Leo", "Wild", 28, "admin");
const user_2 = new User("Anna", "Fox", 23, 'fghhfdh');

user_1.b_day();
user_1.b_day();
user_1.b_day();
user_2.b_day();
user_2.b_day();
user_2.change_name("Alex");

user_1.hi();
user_2.hi();

// Создать класс Product со свойствами title, price, count. И методами change_price и sale.

class Product {
  constructor(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
    this.income = 0;
  }

  change_price(new_price) {
    if (new_price > 0) {
      this.price = new_price;
    } else {
      console.log(`Цена ${new_price} является отрицательной`);
    }
  }

  sale() {
    if (this.count === 0) {
      console.log(`товар закончился`);
    } else {
      // this.count -= 1;
      this.income += this.price;
      this.count--;
    }
  }
}

const product_1 = new Product("Lemon", 30, 10);
const product_2 = new Product("Apple", 15, 5);

// console.log(product_1);
// product_1.change_price(-25);
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// product_1.sale();
// console.log(product_1);

// 1. доработать метод change_price таким образом, чтобы цена менялась только в случае, если указанная новая цена больше 0

// 2. доработать метод sale таким образом. Если при вызову count равен нулю, count не уменьшать и вывести в консль "товар закончился"

// 3. добавить свойство income, которая хранит число прибыли с продаж. при каждой успешной продаже свойства income должно увеличиваться на цену товара
