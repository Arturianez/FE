// Задание. Написать процесс, который выводит строки с данными о пользователях. 
// class User {
//     constructor(name, age, job,status) {
//         this.name = name
//         this.age = age
//         this.job = job
//         this.status = status
//     }
//     info_about_user(statusAbout) {
//         const checkStatus = ['working', 'doesnt work']
//         this.status = statusAbout
//         if(checkStatus.includes(statusAbout)) {
//             console.log(`Person: ${this.name}, age - ${this.age}, job - ${this.job}. Now is ${statusAbout}`);
//         } else {
//             console.log(` This guy: ${this.name} is not ${statusAbout}`);
//         }
//     }
// }
// const newPerson = new User("James", 44, "Manager")
// console.log(newPerson);
// newPerson.info_about_user('working')


// В JavaScript статические методы определяются внутри класса с использованием ключевого слова static. 
// Вот пример статического метода в JavaScript, и мы также добавим туда процесс сложения чисел:
// class Calculator {
//     // Статический метод для сложения двух чисел
//     static add(x, y) {
//         return x + y;
//     }
// }
// // Вызываем статический метод без создания объекта класса
// const result = Calculator.add(5, 3);
// console.log(result); // Выведет 8

// Задание. Создать класс Product со свойствами title, price, count. 
// Задание. Создать статическое свойство income, которое изначальное равно нулю.
// Задание. Создать метод sale. Которое уменьшает count на единицу.
// Если count уже равен нулю, то вызывается исключение. 
// Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.
// Задание. Создать статическое свойство items, которое хранит созданные экземпляры класса Product.
// Задание. Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0.
class Product {
    constructor(title,price,count) {
        this.title = title
        this.price = price
        this.count = count
    }
    static income = 0
    static items = 0
    sale(){
        if(this.count > 0) {
            console.log(`Кол-во на складе ${this.count --}`);
            console.log(`Доход от продажи составил: ${Product.income = Product.income + this.price}`);
            console.log(`Кол-во проданных: ${Product.items = Product.items + 1}`);
        } else {
            console.log(`${this.title} закончился на складе`);
        }
    }
    get checkPrice(){
        return this.price
    }
    set checkPrice(statusPrice) {
        this.price = statusPrice
        if(statusPrice > 0) {
            console.log(`Цена товара больше 0$ и составляет: ${Product.price}`); // почему то не выводит
        } else {
            console.log("Цены нет либо ровняется нулю");
        }
    }
}
const newProduct = new Product("CPU i9-12900k", 400, 4)
console.log("Изначальные данные о товаре на складе ",newProduct);
newProduct.sale()
console.log("Данные о товаре на складе после продажи", newProduct);
console.log(`Товаров продано на сумму: ${Product.income}`);
console.log(`Количество проданных товаров со склада: ${Product.items}`);
console.log(newProduct.checkPrice);

 