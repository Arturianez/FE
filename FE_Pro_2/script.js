// <!-- Задача 1: Создание списка
// Создайте функцию, которая принимает массив строк и добавляет каждую 
// строку в виде элемента списка ( точка как в списке) в определенный 
//  элемент в вашем HTML-документе. -->

// const array = ['one', 'two', 'three','four','five']
// const list = document.querySelector('.list')

// function getArray(array, listElement) {
//     const ul = document.createElement('ul')
//     for (let i = 0; i < array.length; i++) {
//         const word = document.createElement('li')
//         word.innerText = array[i]
//         ul.appendChild(word)
//     }
//     listElement.appendChild(ul)
// }
// getArray(array,list)


// Задача 2: Изменение стилей элементов
// Создайте функцию, которая будет изменять цвет текста всех элементов 
// списка на случайный цвет при каждом вызове.
// Пункт 1
// Пункт 2
// Пункт 3
// Кнопка "Изменить цвет"

// const button = document.querySelector('.button')
// const items = document.querySelectorAll('.items')

// button.addEventListener('click', changeColor)

// function changeColor(){
//     const listItems = document.querySelectorAll('li')
//     listItems.forEach(item => {
//         const randomColor = getRandomColor();
//         item.style.color = randomColor
//     })
// }

// блок получение рандомного цвета "капец думал это легче"
// function getRandomColor() { 
//     const generationColors = '0123456789ABCDEF'; //все символы для генерации цвета
//     let color = '#' // символ начала цвета кода
//     for (i = 0; i < 6; i++) { // до 6 так как код цвета до 5го индекса
//         color += generationColors[Math.floor(Math.random() * 16)]
//         // Math.random задает случайные числа от 0 до 1 и умножаем на 16, чтобы получить код цвета
//         // Math.floor округляет цисло для ближайшего целого, но понять не удалось(
//     }
//     return color;
// }


// Задача 3: Таймер обратного отсчета
// Создайте функцию, которая будет запускать таймер обратного отсчета, 
// показывая сколько времени осталось до определенной даты.

const dateEnd = new Date('2023-9-12 00:00:00')

function countDown(dateEnd,updateCountdown) {
    updateCountdown()
    
    function updateCountdown(){
        const currentDate = new Date()
        const diffDate = dateEnd - currentDate;
        const hours = Math.floor(diffDate / (1000 * 60 * 60))
        const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diffDate % (1000 * 60)) / 1000)
        console.log(hours + " часов " + minutes + " минут " + seconds + " секунд")
    }
}

countDown(dateEnd)
console.log("Дата окнчания таймера: " + dateEnd)
const timer = setInterval(countDown, 1000, dateEnd)




// Подсказка:
// Создайте функцию countdown, которая будет принимать дату окончания таймера.
// Внутри функции создайте переменную, которая будет ссылаться на элемент 
//  с идентификатором countdown.
// Внутри функции создайте еще одну функцию updateCountdown, 
// которая будет обновлять оставшееся время.
// Внутри функции updateCountdown получите текущую дату 
// и вычислите разницу между датой окончания и текущей датой.
// Из полученной разницы времени вычислите количество дней, часов, минут и секунд.

// Обновите содержимое элемента с идентификатором countdown текстом, отображающим оставшееся время.
// Наконец, используйте setInterval для вызова функции updateCountdown 
// каждую секунду.

// setInterval - это функция в JavaScript, которая позволяет выполнять указанную 
// функцию или код через определенный интервал времени. Она принимает два параметра: функцию, 
// которую нужно выполнить, и интервал времени в миллисекундах между каждым выполнением функции.
// Например, если мы хотим вызывать функцию myFunction каждые 2 секунды, 
// мы можем использовать setInterval следующим образом:
// javascript
// setInterval(myFunction, 2000);
// В этом примере myFunction будет вызываться каждые 2 секунды (2000 миллисекунд).
