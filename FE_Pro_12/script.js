// // Вы должны получить список пользователей с JSONPlaceholder API, отфильтровать их по какому-либо критерию, 
// // например, по городу, затем использовать метод map, чтобы преобразовать отфильтрованный список пользователей в новый массив, 
// содержащий только их имена и адреса (например, улица и город). Затем сохраните этот массив в Local Storage 
// и выведите его на страницу.

// получить список пользователей с JSONPlaceholder API
// async function getUsers() {
//     const url = `https://jsonplaceholder.typicode.com/users`
//     try {
//         const response = await fetch(url)
//         const usersList = await response.json()
//         console.log("Список пользователей", usersList);

//         // отфильтровать их по какому-либо критерию(длинна названия городов больше 10 символов)
//         const userFilter = usersList.filter(user => user.address.city.length > 10)
//         console.log("Отфильтрованные пользователи по городам", userFilter);
        
//         // использовать метод map, чтобы преобразовать отфильтрованный список пользователей в новый массив,
//         // содержащий только их имена и адреса
//         const userMap = userFilter.map(function(user){
//             return {
//                 name: user.name,
//                 city: user.address.city,
//                 street: user.address.street
//             }
//         })
//         console.log("Массив пользователей с городами и улицами", userMap);

//         // сохраните этот массив в Local Storage 
//         const userMapJSON = JSON.stringify(userMap) // Преобразование массива userMap в строку JSON
//         localStorage.setItem(`userMap`, userMapJSON) // Сохранение строки в localStorage
//         const getInfoAboutUsers = localStorage.getItem(`userMap`) // Присваиваю из localStorage текст в переменную
//         console.log(getInfoAboutUsers); // вывожу ввиде текста в console

//         // выведите из localStorage на страницу
//         const placeForText = document.querySelector('.placeForText')

//         JSON.parse(localStorage.getItem("userMap")).forEach(function(user){
//         const dataAboutUsers = document.createElement("li");
//         dataAboutUsers.innerText = `
//             Имя пользователя: , ${user.name},
//             Город: , ${user.city},
//             Улица: , ${user.street}
//         `
//         placeForText.appendChild(dataAboutUsers);
//         });
        
//     } catch (e) {
//         console.error(e.message, "Запрос на получение пользователей - не сработал")
//     }
// }
// getUsers()


// // // Задачки на OOP
// // Класс "Человек":
// // Создайте класс Person, который имеет конструктор и свойства name и age. 
// Конструктор должен принимать имя и возраст, и свойства должны быть установлены соответственно.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const newPerson = new Person("Arthur", 32)
console.log(newPerson);

// // Класс "Продукт":
// // Создайте класс Product, который имеет конструктор и свойства name, price, и quantity. 
// Конструктор должен принимать имя продукта, его цену и количество на складе.

class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}
const newProduct = new Product("Bearing", "2500 $", "17 pcs")
console.log(newProduct);


// // Класс "Банковский счет":
// // Создайте класс BankAccount, представляющий банковский счет. 
// Класс должен иметь конструктор, который принимает имя владельца счета и начальный баланс. 
// У счета должен быть метод deposit(), который позволяет внести средства, 
// метод withdraw(), который позволяет снять средства. 
// Также должен быть метод getBalance(), который возвращает текущий баланс.
class BankAccount {
    constructor(nameAccountHolder, accountBalance) {
        this.nameAccountHolder = nameAccountHolder
        this.accountBalance = accountBalance
    }
    deposit(addAmount) {
        this.accountBalance += addAmount
    }
    withdraw(takeAmount) {
        this.accountBalance -= takeAmount
    }
    getBalance() {
        return this.accountBalance;
    }
}
const newClient = new BankAccount('Jared Goff', 35000)
console.log(newClient);

newClient.deposit(5000)
console.log(`Счет клиента после добавления: `,newClient.accountBalance);

newClient.withdraw(3000)
console.log("Счет клиента после снятия: ", newClient.accountBalance);

newClient.getBalance()
console.log("Текущий баланс: ", newClient.accountBalance);


