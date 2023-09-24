// Задача. Создать два промиса. Первый должен вызвать resolve через 2 секунды, 
// а второй через 5. 
// Для задержки используйте setTimeout.
// Задача. Выведите сообщение “оба процесса отработали”, когда оба процесса отработали.
// Задача. Выведите сообщение “один процесс отработал”, когда один процесс отработал.
// Доделываем задание, что начали на нашем занятии во вторник 19 числа :)

// function totalPromise(delay) {
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(`${delay} mileseconds is done `)
//         },delay)
//     })
// }

// const firstPromise = totalPromise(2000)
// const secondPromise = totalPromise(5000)

// firstPromise.then(function(result){
//         console.log(result)
//     })
// secondPromise.then(function(result){
//         console.log(result)
//         console.log("Both proccess are done")
//     })

// Ну и на отработку:
// Задача о случайной задержке (Random Delay): Создайте функцию, 
// которая возвращает промис, который будет разрешен через случайное количество миллисекунд 
// (например, от 1 до 5 секунд). Используйте Math.random() для генерации случайного времени задержки.

// Решить не получилось!

// function randomDelay() {
//     return new Promise(function(resolve,reject){
//         const randomTime = Math.random() * 5
//         if (randomTime < 5000) {
//             console.log("Данное число: " + randomTime)
//             resolve(`Результат появится через: ${randomTime}`)
//         } else {
//             console.log("Данное число больше 5 сек: " + randomTime)
//         }
//     })
// }
// randomDelay()
//     .then(function(result){
//         console.log(result)
//     })
//     .catch(function(error){
//         console.log(error)
//     })


// function randomDelay(randomTime) {
//     return new Promise(function(resolve,reject){
//         const randomTime = Math.random() * 5; 
//         resolve(`Возвращен от 1 до 5 тыс.милисек: за  ${randomTime}`)
//         // if (randomTime <= 5000) {
//         //     setTimeout(function(){
//         //         resolve(`Возвращен от 1 до 5 тыс.милисек:  за ` + randomTime)
//         //     })
//         // } else {
//         //     console.log("More than 5 sec")
//         // }
//     },randomTime)
// }
// const randomResult = randomDelay()

// randomResult.then(function(result){
//     console.log(result)
// })

// randomDelay() 
//     .then(function(result) {
//         console.log(result)
//     })
//     .catch(function(error){
//         console.log(error)
//     })



// Задача о последовательном выполнении (Sequential Execution): 
// Напишите функцию, которая выполняет набор асинхронных операций последовательно, 
// используя промисы. Например, выполнение функции sequentialExecution([func1, func2, func3]) 
// должно вызывать func1, затем, когда он завершится, func2, и так далее.

// Не сделано!

function func1() {
    return new Promise(function(resolve,reject){
        resolve("Step")
    })
}
function func2() {
    return new Promise(function(resolve,reject){
        resolve(` ${func1} is `)
    })
}
function func3() {
    return new Promise(function(resolve,reject){
        resolve(`${func2} done!`)
    })
}

sequentialExecution()
    .then(function(result){
        console.log(result)
    })
    .then(function(result){
        console.log(result + func2)
    })
    .catch(function(error){
        console.log(error)
    })

