// 1) Создать массив из строк и используя метод forEach вывести строки поочередно

// const array = ["one", "two","three", "four", "five"]

// array.forEach(function(item){
//     console.log(item)
// })


// 2) Создать массив из строк и используя метод forEach вывести строки поочередно с их номером (начиная с единицы). 
// Пример выводимой строки “(1) Велосипед”.

// const array = ["one", "two","three", "four", "five"]

// array.forEach(function(index,item){
//     console.log(item+1,index)
// })


// 3) Создать массив из строк и используя метод forEach вывести только те строки, у которых индекс четный.

// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// arrayNumbers.forEach(function(item){
//     if ( item % 2 === 0) {
//         console.log(item)
//     }
// })

// 4) Используя метод map пройтись по массиву из чисел и преобразовать все отрицательные числа в положительные.

// const arrayNumbers = [-3,-5,-7,-11,-15]

// const positiv = arrayNumbers.map(function(item){
//     item = Math.abs(item)
//     return item;
// })
// console.log(positiv)


// 5) Используя метод filter сформировать массив из только положительных чисел
// 6) Используя метод filter сформировать массив из только четных чисел

// const arrayNumbers = [2,4,5,-3,-6,10,-10,11]

// const positiv = arrayNumbers.filter(function(item){
//     if ( item > 0) {
//         console.log("Положительные: " + item)
//     }
// })

// const even = arrayNumbers.filter(function(item){
//     if (item % 2 === 0) {
//         console.log("Четные числа: "+ item)
//     }
// })

// Блок к задаче testDiv10

const testDiv10 = document.querySelector('.testDiv10')
const infoTest10 = document.querySelector('.infoTest10')
const button = document.querySelector('.button')
const infoID = document.querySelector('.infoID')

function showGuy() {
    if (infoID.style.display === "none") {
        infoID.style.display = "block"
    } else {
        infoID.style.display = "none"
    }
}
button.addEventListener("click", showGuy)
