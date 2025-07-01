// const objA = {
//     x: 1,
// }

// // const objB = {
// //     y: 2,
// // }

// // const objC = {
// //     z: 3,
// // }


// // console.log(objA.x);


// // Object.create() = створює новий порожній об'єкт, але в [[Prototype]] буде лежати що в дужках

// const objB = Object.create(objA); 

// objB.y = 2;

// // // console.log(objB); 
// // console.log(objB.x); 

// const objC = Object.create(objB);

// objC.z = 3;

// console.log(objC);

// // for (const i in objC) {
// //     console.log(i);
// // }

// // назва.hasOwnProperty = повертає true або false, перевіряє на прототипний ключ

// console.log(objC.hasOwnProperty("z"));
// console.log(objC.hasOwnProperty("y"));
// console.log(objC.hasOwnProperty("x"));

// console.log(objC.x);



// ==============================================================
//                       Функція Конструктор
// ==============================================================

// Функція Конструктор приймає тільки this.

// Шаблон
const Car = function({model, price, color} = {}) { // = {} якщо нема об'єкта щоби не поверталася помилка
    this.model = model;
    this.price = price;
    this.color = color;


};

Car.prototype.changePrice = function(newPrice) {
    this.price = newPrice
}

Car.prototype.changeColor = function(newColor) {
    this.color = newColor
}

// Екземпляр
const lada = new Car({
    model: "lada",
    price: 100,
    color: "red",
});
lada.changePrice(100000000)
lada.changeColor("violet")
console.log(lada);

// Екземпляр
const audi = new Car({
    model: "audi",
    price: 1000,
    color: "blue",
});
console.log(audi);

// const bmw = new Car(
//     // Якщо нічого нема то буде у ключі значення undefined
// ) 
// console.log(bmw);

// Екземпляр
const bmw = new Car({
    model: "bmw",
    price: 10000,
    color: "yellow",
});
console.log(bmw);

