// 1 уровень сложности: forEach (10 заданий):
// 1) Создайте массив чисел и используйте forEach для вывода каждого элемента в консоль.
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
// arrayNumbers.forEach(function(item){
//     console.log(item)
// })

// 2) Создайте массив строк и используйте forEach для создания нового массива, в котором все элементы будут в верхнем регистре.
// const arrayStrings = ['one', 'two','three','four','five']
// arrayStrings.forEach(function(item){
//     item = item.toUpperCase()
//     console.log(item)
// })

// 3) Создайте массив объектов с полями name и age. Используйте forEach, чтобы вывести имена всех объектов, возраст которых больше 30 лет.
// const objects = [
//     {name: "Chris", age: 32},
//     {name: "Daniel", age: 24},
//     {name: 'Samantha', age: 27}
// ]
// objects.forEach(function(item){
//     if (item.age > 30) {
//         console.log("Старше 30 лет: " + item.name)
//     }
// })

// 4) Создайте массив чисел и используйте forEach, чтобы найти сумму всех элементов массива.
// const arrayNumbers = [1,2,3,4,5]
// let sum = 0
// arrayNumbers.forEach(function(item){
//     sum += item; // sum = sum + item
// })
// console.log(sum)

// 5) Создайте массив чисел и используйте forEach, чтобы найти максимальное значение в массиве.
// const arrayNumbers = [4, 8, 12, 44, 67];
// let max = arrayNumbers[0];
// arrayNumbers.forEach(function (item) {
//   if (item > max) {
//     max = item;
//   }
// });
// console.log(max);

// 6) Создайте массив строк и используйте forEach, чтобы создать новый массив, в котором будут только строки, содержащие букву 'a'.
// const lines = ["Austria", "German", "Poland", "England", "Sweden"]
// const countries = []
// lines.forEach(function(item){
//     if ( item.toLowerCase().includes('a')) { // includes() - проверка наличия чего либо в каждом из элементов массива
//         countries.push(item)
//     }
// })
// console.log(countries)

// 7) Создайте массив чисел и используйте forEach, чтобы создать новый массив, в котором все элементы будут умножены на 2.
// const arrayNumbers = [1,4,9,10,23,35,57,99]
// const numbers = []
// arrayNumbers.forEach(function(item){
//     numbers.push(item*2)
// })
// console.log(numbers)

// 8) Создайте массив объектов с полями name и age. Используйте forEach, чтобы создать новый массив, содержащий только имена объектов.
// const objects = [
//     {name: "Chris", age: 32},
//     {name: "Daniel", age: 24},
//     {name: 'Samantha', age: 27}
// ]
// const names = []
// objects.forEach(function(item){
//     names.push(item.name)
// })
// console.log(names)

// 9) Создайте массив строк и используйте forEach, чтобы найти самую длинную строку в массиве.

// const arrayLines = ["one","Steven", "red", "Jonathan", "Movie"]
// let emptyWords = "";
// arrayLines.forEach(function(item){
//     if (item.length > emptyWords.length) {
//         emptyWords = item;
//     }
// })
// console.log(emptyWords)

// 10) Создайте массив объектов с полями name и score. Используйте forEach, чтобы найти средний балл всех объектов в массиве.
// const arrayScores = [
//     {name: "Robert", score: 4},
//     {name: "Jeff", score: 7},
//     {name: "Danny", score: 6},
//     {name: "Carla", score: 6},
//     {name: "Jessica", score:8}
// ]
// let sum = 0
// arrayScores.forEach(function(item){
//     sum = sum + item.score
// })
// console.log(sum/5)

// !!!!!!!!!!!!!!!!!!
// map (5 заданий):
// 1) Создайте массив чисел и используйте map, чтобы создать новый массив, в котором все элементы будут возведены в квадрат.
// const numbers = [1,2,3,4,5,6,7,8,9]

// const square = numbers.map(function(item){
//     return Math.pow(item,2)
// })
// console.log(square)

// 2) Создайте массив строк и используйте map, чтобы создать новый массив, в котором все элементы будут в нижнем регистре.
// const lines = ["MAP","GARLEM","MIX","APPLE","HOME"]

// const upper = lines.map(function(item){
//     return item.toUpperCase()
// })
// console.log(upper)


// 3) Создайте массив объектов с полями name и age. Используйте map, чтобы создать новый массив, содержащий только возраст каждого объекта.
// const objects = [
//     {name: "Arthur", age: 32},
//     {name: "Sam", age: 33},
//     {name: "Rick", age: 34},
//     {name: "Steven", age: 25}
// ]
// const ages = objects.map(function(item){
//     return item.age
// })
// console.log(ages)

// 4) Создайте массив чисел и используйте map, чтобы создать новый массив, в котором все элементы будут округлены до ближайшего целого числа.
// const numbers = [0.2, 0.3, 0.4, 0.5, 0.6, 0.9]

// const round = numbers.map(function(item){
//     if (item > 0.49) {
//         return Math.ceil(item) // округление ВВЕРХ до ближайшего целого
//     } else {
//         return Math.floor(item) // округление ВВНИЗ до ближайшего целого
//     }
// })
// // Math.round - округляет до ближашего целого
// console.log(round)

// 5) Создайте массив строк и используйте map, чтобы создать новый массив, 
// в котором все элементы будут содержать дополнительный текст, например, " - новый элемент".
// const strings = ["one","two", "three","four","five"]

// const newText = strings.map(function(item){
//     return `${item} apple(s)`
// })
// console.log(newText)

// !!!!!!!!!!!!!!!!!!!!!!!!
// filter (5 заданий):
// 1) Создайте массив чисел и используйте filter, чтобы создать новый массив, содержащий только четные числа.
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newArray = numbers.filter(function(item){
//     return item % 2 === 0
// })
// console.log(newArray)

// 2) Создайте массив строк и используйте filter, чтобы создать новый массив, содержащий только строки длиной более 5 символов.
// const arrayStrings = ["one","two","three","four","five","seventeen"]
// const newStrings = arrayStrings.filter(function(item){
//     return item.length > 5
// })
// console.log(newStrings)

// 3) Создайте массив объектов с полями name и age. Используйте filter, чтобы создать новый массив, содержащий только объекты с возрастом больше 25 лет.
// const objects = [
//     {name: "Arthur", age: 32},
//     {name: "Sam", age: 33},
//     {name: "Rick", age: 34},
//     {name: "Steven", age: 25}
// ]
// const oldGuys = objects.filter(function(item){
//     return item.age > 25
// })
// console.log(oldGuys)

// 4) Cоздайте массив чисел и используйте filter, чтобы создать новый массив, содержащий только положительные числа.
// const arrayNum = [-1,-3,-5,-10,1,3,5,10]
// const newArray = arrayNum.filter(function(item){
//     if (item > 0) {
//         return item
//     }
// })
// console.log(newArray)

// 5) Создайте массив строк и используйте filter, чтобы создать новый массив, содержащий только строки, начинающиеся с буквы 'A'.
// const arrayStrings = ["Apple", "Robin", "China", "Alpha", "Break"]
// const newStrings = arrayStrings.filter(function(item){
//     return item.startsWith('A') // startWith - проверяет начинает ли строка с определенной подстроки, возвращает исходное true, 
//     // если строка начинается с внесенного в ()
// })
// console.log(newStrings)

// !!!!!!!!!!!!!!!!!!!!
// sort (5 заданий):
// 1) Создайте массив чисел и используйте sort, чтобы отсортировать его по возрастанию.
// const arrayNumbers = [32,56,11,8,222,67,90]
// arrayNumbers.sort(function(a,b){
//     return a - b
// })
// console.log(arrayNumbers)

// 2) Создайте массив строк и используйте sort, чтобы отсортировать его в алфавитном порядке.
// const arrayStrings = ["string","char","boolean","integer"]
// arrayStrings.sort() // если не указаны условия, то сортирует в порядке лексического возрастания
// console.log(arrayStrings)

// 3) Создайте массив объектов с полями name и age. Используйте sort, чтобы отсортировать массив по возрасту (по возрастанию).
// const objects = [
//     {name: "Arthur", age: 32},
//     {name: "Sam", age: 33},
//     {name: "Rick", age: 34},
//     {name: "Steven", age: 25}
// ]
// objects.sort(function(a,b){
//     return a.age - b.age
// })
// console.log(objects)

// 4) Создайте массив объектов с полями name и score. Используйте sort, чтобы отсортировать массив по баллам (по убыванию).
// const arrayScores = [
//     {name: "Robert", score: 4},
//     {name: "Jeff", score: 7},
//     {name: "Danny", score: 6},
//     {name: "Carla", score: 6},
//     {name: "Jessica", score:8}
// ]
// arrayScores.sort(function(a,b){
//     return b.score - a.score
// })
// console.log(arrayScores)

// 5) Создайте массив строк, содержащих числа, и используйте sort, чтобы отсортировать его как числа (а не как строки) в порядке возрастания.
// const arrayGarbage = ["number 2", "number 3", "number 15", "number 1", "number 10"]
// arrayGarbage.sort(function(a,b){
//     return parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/))
//     // parseInt - преобразование в числовой тип данных
//     // match() - метод, который используется для поиска совпадений с регулярным выражением в строке.Он возвращает массив с найденными совпадениями или null, если совпадений не найдено.
//     // /\d+/ - извлекается число из каждого элемента
// })
// console.log(arrayGarbage)

// reduce (5 заданий):
// 1) Создайте массив чисел и используйте reduce, чтобы найти сумму всех элементов массива.
// const numbers = [1,2,5,10,20,100]
// const calculate = numbers.reduce(function(a,b){
//     return a + b
// })
// console.log(calculate)

// 2) Создайте массив чисел и используйте reduce, чтобы найти произведение всех элементов массива.
// const numbers = [1,2,5,10,20,100]
// const calculate = numbers.reduce(function(a,b){
//     return a * b
// })
// console.log(calculate)

// 3) Создайте массив строк и используйте reduce, чтобы объединить все строки в одну большую строку.
// const lines = ["A","R","T","H","U","R"]
// const finalWord = lines.reduce(function(a,b){
//     return a + b
// })
// console.log(finalWord)

// 4) Создайте массив объектов с числовыми полями и используйте reduce, чтобы найти среднее значение всех чисел в массиве.
// const arrayObjects = [
//     {number: 3},
//     {number: 4},
//     {number: 14},
//     {number: 86}
// ]
// const midCount = arrayObjects.reduce(function(emptyBox,firstArrayNumber){
//     return emptyBox + firstArrayNumber.number
// }, 0 ) / arrayObjects.length; 
// // почему 0 ставиться тут не совсем понял
// // / arrayObjects.length;  пишем после reduce, так как длинной массива определим среднее число
// console.log(midCount)

// 5) Создайте массив объектов с числовыми полями и используйте reduce, чтобы найти максимальное значение среди всех чисел в массиве.
const arrayObjects = [
    {number: 3},
    {number: 4},
    {number: 14},
    {number: 86}
]
// еле склеил. Сложно для понимания. Это как видеть плавающую утку но не знать, что она под водой плавает своими ластами. Нужен разбор
const maxNumber = arrayObjects.reduce(function(emptyBox, firstArrayNumber){
    if (emptyBox.number > firstArrayNumber.number) {
        return emptyBox;
    } else {
        return firstArrayNumber;
    }
})
console.log(maxNumber)
