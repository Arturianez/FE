// 1 уровень сложности: В данном блоке вы будете повторять методы массивов, работы с jsonplaceholder (async, fetch)
// map:

// Преобразование массива имен в массив объектов: У вас есть массив строк, представляющих имена. 
// Используйте map, чтобы преобразовать их в массив объектов с ключом name.
// const arrayNames = ["Arthur","Simon", "Roger", "Andrew"]
// const newArrayObject = arrayNames.map(function(name,id){
//     return {
//         id: id,
//         name: name
//     }
// })
// console.log(newArrayObject);

// Умножение чисел в массиве на определенное значение: 
// Примените map для умножения каждого числа в массиве на определенное число.
// const arrayNumbers = [3,5,6,9,10]
// const result = arrayNumbers.map(function(item){
//     return item = item * 2
// })
// console.log("Массив чисел был: ", arrayNumbers);
// console.log("Массив чисел после умножения: ", result);

// Преобразование температур из Цельсия в Фаренгейт: У вас есть массив температур в градусах Цельсия. 
// Используйте map, чтобы преобразовать их в градусы Фаренгейта.
// const arrayCelsius = [4,12,25,36]
// const arrayFahrenheit = arrayCelsius.map(function(info){
//     // оф расчет преобразования температуры из градусов Цельсия в градусы Фаренгейта
//     return info = info * 9 / 5 + 32 
// })
// console.log(arrayFahrenheit);

// Добавление уникальных ID к объектам в массиве: 
// Пройдитесь по массиву объектов и с помощью map добавьте каждому объекту уникальный идентификатор.

// const arrayClients = [
//     {name: "Robert", age: 35, city: "Brooklyn"},
//     {name: "James", age: 32, city: "Queens"},
//     {name: "Richard", age: 26, city: "Staten Island"}
// ]
// const arrayGetId = arrayClients.map(function(obj,index){
//     return {
//         id: index,
//         name: obj.name,
//         age: obj.age,
//         city: obj.city
//     }
// })
// console.log(arrayGetId);
    
// Преобразование массива строк в их длины: Используйте map, чтобы преобразовать массив строк в массив их длин.
// const arrayWords = ["green", "ten", "sometimes"]
// const arrayLength = arrayWords.map(function(word){
//     return word.length
// })
// console.log(arrayLength);


// forEach:
// Вывод элементов массива в консоль: Используйте forEach, чтобы вывести каждый элемент массива в консоль.
// const arrayNumbers = [1,3,5,7,8]
// arrayNumbers.forEach(function(item){
//     console.log(item);
// })

// Обновление свойств объектов в массиве: Пройдитесь по массиву объектов и используйте forEach, 
// чтобы добавить или изменить определенное свойство в каждом объекте.
// const arrayObjects = [
//     {name: "Paul", height: 6.0, weight: 200},
//     {name: "Sam", height: 6.2, weight: 220},
//     {name: "Otto", height: 5.4, weight: 176},
// ]
// arrayObjects.forEach(function(client){
//     let newWeight = 50
//     const newFatClient = client.weight + newWeight
//     console.log();
//     console.log(`Каждый стал толще на ${newWeight}, итого наши жирдяи весят, ${newFatClient} паундов`);
// })

// Удаление определенных элементов из массива: Используйте forEach, 
// чтобы удалить элементы из массива, соответствующие определенному критерию.
// !!!НЕ РЕШАЕМ!!!
// удалить цифры или строки из массива
// const arrayObjects = [1,2,3,4,"one","two"]
// arrayObjects.forEach(function(item){
//     if( typeof item === "string") {
//         // arrayObjects.splice(item)
//     }
// })
// console.log(arrayObjects.slice(0,3)); - метод решения без forEach
// console.log(arrayObjects);

// Вызов асинхронной функции для каждого элемента массива: 
// Примените forEach, чтобы вызвать асинхронную функцию для каждого элемента массива.
// const arrayObj = [
//     {name: "John", age: 21},
//     {name: "Christopher", age: 22},
//     {name: "Robert", age:23}
// ]
// function infoObj(obj) {
//     console.log(`Name: ${obj.name}, age: ${obj.age}`);
// }
// arrayObj.forEach((obj) => {
//     infoObj(obj)
// })

// Агрегация данных из массива: Используйте forEach, чтобы собрать информацию из массива и создать новую структуру данных.
// const arrayObj = [
//     {name: "John", age: 21},
//     {name: "Christopher", age: 22},
//     {name: "Robert", age:23}
// ]
// function getInfo(person) {
//     console.log(`Name: ${person.name}, age: ${person.age}`);
// }
// arrayObj.forEach((person) => {
//     getInfo(person)
// })

// const names = []
// arrayObj.forEach((person) => {
//     names.push(person.name)
// })
// console.log("Новая структура ввиде массива состоящиая из имен: ",names);


// filter:

// Отфильтровать четные числа из массива: Используйте filter, чтобы получить массив, 
// содержащий только четные числа из исходного массива.
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
// const evenNumbers = arrayNumbers.filter((number) => {
//     if(number % 2 === 0) {
//         return number
//     }
// })
// console.log(evenNumbers);

// Отфильтровать слова по длине: Отфильтруйте массив строк так, 
// чтобы в итоге остались только строки определенной длины.
// const arrayWords = ["at","two","send","fifth","second"]
// const cutWords = arrayWords.filter((word) => {
//     if(word.length > 4) {
//         return word;
//     }
// })
// console.log(cutWords);

// Отфильтровать объекты с определенным свойством: 
// Используйте filter, чтобы получить массив объектов, содержащих определенное свойство.
// const objects = [
//     {name: "John", age: 35, city: "Staten Island"},
//     {name: "Stasie", age: 47, city: "Brooklyn"},
//     {name: "Robert", age: 16, city: "Manhattan"},
//     {name: "Sandra", age: 29, city: "Queens"},
//     {name: "Otto", age: 34, city: "Bronx"},
// ]
// const cities = objects.map(obj => {
//     return obj.city;
// })
// console.log(cities);
// Через filter не смог решить
// const cities = objects.filter(obj => {
//     return obj.hasOwnProperty("city");
// })
// console.log(cities);


// Отфильтровать элементы по критерию сравнения: 
// Отфильтруйте элементы массива, основываясь на условии сравнения, заданном функцией.
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
// function getNumbers(number) {
//     if(number > 5) {
//         return number;
//     }
// }
// const newNumbers = arrayNumbers.filter((number) => {
//     return getNumbers(number)
// })
// console.log(newNumbers);

// Отфильтровать элементы, удовлетворяющие нескольким условиям: 
// Используйте filter, чтобы получить подмножество элементов, 
// удовлетворяющих нескольким условиям одновременно.
// const objects = [
//     {name: "John", age: 35, city: "Staten Island"},
//     {name: "Stasie", age: 47, city: "Brooklyn"},
//     {name: "Robert", age: 16, city: "Manhattan"},
//     {name: "Sandra", age: 31, city: "Queens"},
//     {name: "Otto", age: 34, city: "Bronx"},
// ]
// function getObjects(client) {
//     if(client.name.length > 4 && client.age > 30) {
//         return {name: client.name, age: client.age}
//     }
// }
// const infoAboutClient = objects.filter((client) => {
//     return getObjects(client)
// })
// console.log(infoAboutClient);


// reduce:

// Вычисление общей суммы чисел в массиве: Используйте reduce, 
// чтобы найти общую сумму всех чисел в массиве.
// const arrayNumbers = [1,3,8,23,34,87]
// const sumNumbers = arrayNumbers
//     .reduce((a,b) => {
//     return a*b;
// })
// console.log(sumNumbers);

// Объединение массива строк в одну строку: Примените reduce, 
// чтобы объединить все строки из массива в одну.
// const arrayWords = ["i_","hope_","it_","works!"]
// const mainPhrase = arrayWords
//     .reduce((a,b) => {
//     return a+b;
// })
// console.log(mainPhrase);

// Нахождение максимального значения в массиве: Используйте reduce, 
// чтобы найти максимальное значение в числовом массиве.
// const arrayNumbers = [110,323,878,23,34,87]
// const maxNumber = arrayNumbers
//     .reduce((a,b) => {
//         if(a>b) {
//             return a;
//         } else {
//             return b;
//         }
//     })
// console.log(maxNumber);

// Группировка элементов массива по критерию: Используйте reduce, 
// чтобы сгруппировать элементы массива по определенному критерию.
// const arrayWords = ["something", "where", "one","description", "whatever", 'here']
// const wordsLength = arrayWords
//     .reduce((groups,word) => {
//         const length = word.length  //текущая длинная слова
//         if(!groups[length]) { // проверка на существ такой группы, если нет, то создаём пустую
//             groups[length] = []
//         }
//         groups[length].push(word) // добавление в конец массива новое слово
//         return groups;
//     }, {});
// console.log(wordsLength);

// Вычисление среднего значения чисел в массиве: Используйте reduce, 
// чтобы найти среднее значение чисел в массиве.
// const arrayNumbers = [1,3,6,90,134]
// const midNumbers = arrayNumbers
//     .reduce((firstN,secondN) => {
//         return firstN+secondN
//     })
// const mid = midNumbers / arrayNumbers.length
// console.log(mid);


// Здесь вам надо изучить slice, гуглите, изучайте, метод простой
// slice:

// Выделение подмассива определенной длины: Используйте slice, 
// чтобы выделить подмассив определенной длины из массива.
// const arrayStrings = ["one","two","three","four","five"]
// console.log(arrayStrings.slice(0,4)); // создаёт массив их исходного массива, первое число старт массива, второе число граница счета массива

// Извлечение части массива с определенными индексами: 
// Используйте slice, чтобы извлечь часть массива между определенными индексами.
// const arrrayWords = ['grey','i','cut','these','words!','red']
// console.log(arrrayWords.slice(1,5));

// Копирование массива с определенными изменениями: 
// Используйте slice для копирования массива и внесите в копию определенные изменения.
// const arrayStrings = ["one","two","three","four","five"]
// function copyArray(arr) {
//     return arr.slice()
// }
// const newArray = copyArray(arrayStrings)
// newArray.push("new word")

// console.log("Original array: ",arrayStrings);
// console.log("New array: ",newArray);


// Удаление элементов из массива с сохранением оригинала: 
// Используйте slice для удаления определенного диапазона элементов из массива, 
// сохраняя оригинальный массив неизменным.
// `indexOf`, чтобы найти индекс элемента, который нужно удалить из массива.
// метод concat() используется для объединения двух или более массивов пример: (arr1.concat(arr2))
// const arrayStrings = ["one","two","three","four","five"]
// function removeElement(arr,element) {
//     const index = arr.indexOf(element)
//     if(index !== -1) {
//         return arr.slice(0,index).concat(arr.slice(index +1)) // 1ый кусов до индекса, 2ой после. Итого исключаем ненужный элемент
//     } else {
//         return arr.slice()
//     }
// }
// const afterRemove = removeElement(arrayStrings,"three")
// console.log("Массив первоначальный: ", arrayStrings);
// console.log("Массив после удаления элемента: ", afterRemove);

// Использование slice для разделения массива: 
// Используйте slice для разделения массива на две части по определенному критерию.
// const arrayNumbers = [14,55,80,3,53,11,119]
// function cutArray(arr,element) {
//     const index = arr.indexOf(element)
//     const beforeNumber = arr.slice(0, index)
//     const afterNumber = arr.slice(index + 1)
//     console.log("Массив до точки разделения: ", beforeNumber);
//     console.log("Массив после точки разделения: ",afterNumber);
// }
// cutArray(arrayNumbers,3)


// fetch с JSONPlaceholder:


// Получение списка пользователей: Используйте fetch для получения списка 
// пользователей с JSONPlaceholder API.
// async function getUsers() {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         const users = await response.json()
//         console.log(users);
//     } catch (e) {
//         console.error(e.message, "Запрос на пользователей не выполнен");
//     }
// }
// getUsers()

// Получение списка постов конкретного пользователя: Используйте fetch, 
// чтобы получить список постов от определенного пользователя.
// async function getPosts(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         const post = await response.json()
//         console.log(`Пост пользователя номер ${id}`, post);
//     } catch (e) {
//         console.error(e.message, "Запрос на посты не выполнен");
//     }
// }
// getPosts(4)

// Добавление нового поста: Используйте fetch, чтобы добавить новый пост на JSONPlaceholder.
// НЕ РЕШЕНО!!!
// async function getPosts(newPost) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//         const post = await response.json()
//         const newPost = await response.json()
//         console.log(post);
//     } catch (e) {
//         console.error(e.message, "Запрос на посты не выполнен");
//     }
// }
// getPosts()

// const newPostData = {
//     body: "new body",
//     id: 5845,
//     title: "some new info",
//     userId: 256
// }


// Обновление данных поста: Используйте fetch, чтобы обновить информацию о существующем посте на JSONPlaceholder.

// Удаление поста: Используйте fetch, чтобы удалить определенный пост с JSONPlaceholder.