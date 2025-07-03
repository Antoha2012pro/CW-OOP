// Урок 1

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
// const Car = function({model, price, color} = {}) { // = {} - вони повинні для того щоби не вилазила помилка коли нема об'єкта
//     this.model = model;
//     this.price = price;
//     this.color = color;


// };

// Car.prototype.changePrice = function(newPrice) {
//     this.price = newPrice
// }

// Car.prototype.changeColor = function(newColor) {
//     this.color = newColor
// }

// // Екземпляр
// const lada = new Car({
//     model: "lada",
//     price: 100,
//     color: "red",
// });
// lada.changePrice(100000000)
// lada.changeColor("violet")
// console.log(lada);

// // Екземпляр
// const audi = new Car({
//     model: "audi",
//     price: 1000,
//     color: "blue",
// });
// console.log(audi);

// // const bmw = new Car(
// //     // Якщо нічого нема то буде у ключі значення undefined
// // ) 
// // console.log(bmw);

// // Екземпляр
// const bmw = new Car({
//     model: "bmw",
//     price: 10000,
//     color: "yellow",
// });
// console.log(bmw);






// ===============================================================================================================
//                                                   Урок 2
// ---------------------------------------------------------------------------------------------------------------
//                                                 ООП   Класи
// ===============================================================================================================

// 🚗 ЗАДАЧА: Клас Машина і Клас Електромобіль
// Уявімо, що ми створюємо програму для автосалону. Є звичайні машини, а є спеціальні — електромобілі. Всі вони мають марку (назву) і колір, але електромобілі ще мають рівень заряду батареї.

// ✅ ВИМОГИ
// Створити клас Car, який має:

// публічні властивості brand (марка) і color

// метод describe() — який описує машину: "Це [brand] кольору [color]"

// Створити клас ElectricCar, який наслідує Car і додає:

// приватну властивість #batteryLevel

// геттер і сеттер для batteryLevel

// метод charge() — який додає заряд

// Клас звичайної машини


class Car {   // class - ключеве слово для створення класів. Після цього завжди йде назва з великої літери
    static message = "Клас, описуючий автомобіль";

    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    describe() {   // describe() - метод класу, який описує наш автомобіль
        console.log(`Це ${this.brand} кольору ${this.color}`);
        // return `Це ${this.brand} кольору ${this.color}`   // return не обов'язковий
    }
}

class ElectricCar extends Car {   // клас ElectricCar наслідує Car
    #batteryLevel;   // #назва - приватна властивість і статичні методи (можна назвати змінною), властивості оголошуються перед constructor. Задається перед методом constructor. До цьої властивості неможливо достукатися за межами об'єкта там де він є.

    constructor(brand, color, batteryLevel) {
        super(brand, color);   // super() - стягуємо параметри с класу Car, у цьому випадку це:  this.brand = brand; та this.color = color;
        this.#batteryLevel = batteryLevel;
    }

    get batteryLevel() {   // get - геттер, дозволяє отримати та прочитати рівень зряду
        return this.#batteryLevel
    }

    set batteryLevel(level) { // set - сеттер, дозволяє змінити вибране значення з перевіркою
        // return this.#batteryLevel = level;
        if (level < 0 || level > 100) {   // перевірка на заряд більше 100
            console.log(`Помилка: рівень заряду неможливий`);
        } else {
            this.#batteryLevel = level;
        }
    }

    charge(value) {
        this.#batteryLevel += value;
    }
}

console.log(Car.message);


const bmw = new Car("bmw", "red");
console.log(bmw);
// bmw.describe();


const tesla = new ElectricCar("tesla", "blue", 50);
console.log(tesla);
// tesla.describe();

// tesla.batteryLevel = 1001;
// console.log(tesla.batteryLevel);

// tesla.charge(30);
// console.log(tesla);
