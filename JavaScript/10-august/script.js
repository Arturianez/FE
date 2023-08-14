// 1) Создать кнопку и красный квадрат с размерами 200х200px. 
// При клике на кнопку менять у квадрата цвет заднего фона 
// на зеленый и уменьшать его до размеров 100х100px.

// const button = document.querySelector('.button')
// const item = document.querySelector('.item')

// button.addEventListener('click', function(){
//     item.classList.toggle('change')
// })

// 2) Создать кнопку и розовый квадрат с размерами 200х200px.
//  При клике на кнопку менять цвет на синий и выводить в консоль 
//  обновленный цвет квадрата.

// const button = document.querySelector('.button')
// const item2 = document.querySelector('.item2')
// button.addEventListener('click', function(){
//     item2.classList.toggle('change2')
//     const color = window.getComputedStyle(item2).getPropertyValue('background-color');
//     console.log(color);
// })

// 3) Создать кнопку и квадрат с размерами 150х150px. 
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const button = document.querySelector('.button')
// const item3 = document.querySelector('.item3')
// button.addEventListener('click', function(){
//     item3.classList.toggle('change3')
// })

// 4) Создать кнопку и div с классом root. 
// При клике на кнопку в div создается параграф синего цвета. 
// Текст параграфа произвольный.

// const button = document.querySelector('.button')
// const root = document.querySelector('.root')

// button.addEventListener('click', function(){
//     const text = document.createElement('p')
//     text.innerText = "Произвольный текст"
//     root.classList.add('pColor')
//     root.append(text)
// })

// 5) Создать кнопку и div с классом root. 
// При клике на кнопку в div создаются по очереди 
// параграфы синего и зеленого цветов. 
// Первый цвет синий.

// const button = document.querySelector('.button')
// const root2 = document.querySelector('.root2')

// button.addEventListener('click', function(){
//     const paragraph1 = document.createElement('p')
//     paragraph1.classList.add('pColor1')
//     paragraph1.innerText = "Измененный параграф"
//     root2.append(paragraph1)
    
//     const paragraph2 = document.createElement('p')
//     paragraph2.classList.add('pColor2')
//     paragraph2.innerText = "Измененный параграф"
//     root2.append(paragraph2)

// })


// !!!!!!Задания повышенной сложности!!!!!!
// !!!!!!Задания повышенной сложности!!!!!!
// !!!!!!Задания повышенной сложности!!!!!!

// Задание 1: Функции и DOM:
// Создайте кнопку на веб-странице. 
// При клике на неё, измените текст этой кнопки на "Clicked!" с помощью JavaScript, 
// используя работу с DOM (изменение содержимого элемента).

// const button = document.querySelector('.button')
// button.addEventListener('click', function(){
//     button.innerText = 'Clicked!'
//     button.append(button)
// })

// Задание 2: Работа с массивами:
// Создайте массив строк с разными названиями фруктов. 
// Напишите функцию, которая принимает массив и выводит в консоль все фрукты, 
// начинающиеся на определенную букву.

// const arrayFruits = ["Apple", "Pineapple", "Watermelon", "Lemon", "Orange"]
// function showFruits(arrayFruits, letter) {
//     for(let i = 0; i < arrayFruits.length; i++) {
//         const fruit = arrayFruits[i]
//         if (fruit.charAt(0) === letter ) {
//             console.log(fruit)
//         }
//     }
// }
// showFruits(arrayFruits, "A")

// Задание 3: Работа с объектами:
// Создайте объект, представляющий пользователя с полями "имя", "возраст", "email". 
// Напишите функцию, которая принимает этот объект и 
// возвращает строку приветствия вида "Привет, {имя}! Тебе {возраст} лет."

// const info = {
//     Name: "Arthur",
//     Age: "32",
//     email: "az@gmail.com"
// }

// function showInfo(info,Name,Age,email) {
//     const person = info
//     console.log(person)
// }
// showInfo("Привет, " + info.Name + "!" + " Тебе " + info.Age + " годиков(ка)." + "Твой email: " +info.email)

// Задание 4: Функции и условия:
// Напишите функцию, которая принимает число и проверяет, является ли оно четным. 
// Верните соответствующее сообщение.

// function numbersCheck(number) {
//     if (number % 2 === 0) {
//         console.log("Число четное")
//     } else {
//         console.log("Число нечетное")
//     }
// }
// numbersCheck(2)

// Задание 5: Работа с DOM classList:
// Создайте список элементов (например, неупорядоченный список ul). 
// При клике на элемент списка, 
// добавьте ему класс "highlighted", а при повторном клике - уберите этот класс.

// const items = document.querySelectorAll('.items')
// for (let i=0; i < items.length; i++) {
//     items[i].addEventListener('click', function(){
//         items[i].classList.toggle('highlighted')
//     })
// }

// Задание 6: Работа с массивами:
// Создайте массив чисел. Напишите функцию, 
// которая находит сумму всех элементов в массиве и возвращает её.

// const arrayNumbers = [4,3,23,67,9]
// const result = showResult(arrayNumbers)
// console.log(result)

// function showResult(arrayNumbers) {
//     let sum = 0
//     for (i=0; i < arrayNumbers.length; i++) {
//         sum = sum + arrayNumbers[i]
//     }
//     return sum;
// }
// showResult(arrayNumbers) - как через вызов функции сделать, 
// не получилось, пришлось через console.log


// Задание 7: Работа с объектами:
// Создайте объекты, представляющие различные товары с полями 
// "название", "цена", "скидка в процентах".
//  Напишите функцию, которая принимает массив таких объектов 
//  и возвращает общую сумму стоимости товаров с учетом скидок.

// const products1 = {
//     name: "Tomatoes",
//     price: 100,
//     discount: 0.89
// }

// const products2 = {
//     name: "Potatoes" ,
//     price: 150 ,
//     discount: 0.85
// }

// const products3 = {
//     Name: "Lemon",
//     price: 115 ,
//     discount: 0.8
// }

// function calculate(products1,products2,products3) {
//     const tomatoesPrice1 = products1.price
//     const tomatoesDiscount1 = products1.discount
//     const sum1 = tomatoesPrice1 * tomatoesDiscount1
//     console.log(sum1)

//     const tomatoesPrice2 = products2.price
//     const tomatoesDiscount2 = products2.discount
//     const sum2 = tomatoesPrice2 * tomatoesDiscount2
//     console.log(sum2)

//     const tomatoesPrice3 = products3.price
//     const tomatoesDiscount3 = products3.discount
//     const sum3 = tomatoesPrice3 * tomatoesDiscount3
//     console.log(sum3)

//     totalSum = sum1 + sum2 + sum3
//     console.log("Стоимость товара с учетом скидки: " + totalSum)

// }
// calculate(products1,products2,products3)


// Задание 8: Функции и замыкания:
// Напишите функцию, которая создает счетчик и возвращает другую функцию. 
// Вызов этой функции должен увеличивать счетчик на 1 и возвращать новое значение.

// function entrance() {
//     let number = 0;

//     function exit() {
//         number++
//         return number;
//     }
//     return exit;
// }
// const counter = entrance()
// console.log(counter())
// console.log(counter())
// console.log(counter())


// Задание 9: Работа с DOM и событиями:
// Создайте несколько кнопок на странице с разными названиями. 
// При наведении курсора на кнопку, измените её текст на "Наведение!" и 
// при уходе курсора - верните исходный текст.

// const buttons = document.querySelector('.buttons')
// const first = document.querySelector('.first')
// const second = document.querySelector('.second')
// const third = document.querySelector('.third')

// first.addEventListener('mouseover', function(){
//     const text = first
//     text.innerText = "Наведение!"
//     first.addEventListener('mouseout', function(){
//         const text = first
//         text.innerText = "Press"
//     })
// })
// second.addEventListener('mouseover', function(){
//     const text = second
//     text.innerText = "Наведение!"
//     second.addEventListener('mouseout', function(){
//         const text = second
//         text.innerText = "Not working"
//     })
// })
// third.addEventListener('mouseover', function(){
//     const text = third
//     text.innerText = "Наведение!"
//     third.addEventListener('mouseout', function(){
//         const text = third
//         text.innerText = "Dont press"
//     })
// })

// Задание 10: Работа с объектами и массивами:
// Создайте массив объектов, представляющих студентов со свойствами "имя", "возраст", "курс". 
// Напишите функцию, которая принимает массив студентов и возвращает массив их имен.

const arrayStudents = [
    {name: "Tomas",age: 23,course: 4},
    {name: "Chris", age: 22, course: 3},
    {name: "Ashley", age: 21, course: 2} 
]
function getNames(arrayStudents) {
    const names = arrayStudents.map(studentName => studentName.name)  
    // map - это извлечени из массива и создание нового массива, => стрелочная функция присвоения, 
    // после map мы по сути указываем что нам нужно стырить из массива, путь прописывается по примеру в задаче
    // studentName просто названия для понимания. Нужно более детальное пояснение
    return names;
}
console.log(getNames(arrayStudents))

