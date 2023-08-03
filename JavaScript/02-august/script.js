// 1) Написать цикл, который создает множество параграфов с каждым десятым числом в 
// промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.

// const pickUp = document.querySelector('.numbers');
// for (i = 100; i >= 50; i -= 10) {
//     console.log(i)
//     const newPar = document.createElement('p')
//     newPar.innerText = i
//     console.log(newPar)
//     pickUp.append(newPar)
// }

// 2) Написать цикл, который проходится по массиву строк, для каждой строки создает параграф
// и добавляет его в div с классом strings_container. 
// Строки взять произвольные.

// const array = ["Matt", "Barney", "Milka", "Puh", "Bagira"]
// const pickUp = document.querySelector('.strings_container')
// for (i = 0; i < array.length; i++) {
//     const newP = document.createElement('p')
//     newP.innerText = array[i]
//     console.log(array[i])
//     pickUp.append(newP)
// }

// 3) Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name
// и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. 
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.


const cards = [
    {first_name: 'Archie' , last_name: 'Born' , age: 25} ,
    {first_name: 'Tomas' , last_name: 'Smith' , age: 17} ,
    {first_name: 'Robin' , last_name: 'Charst' , age: 31}
]
const pickUp = document.querySelector('.users_container')
    for (i = 0; i < cards.length; i++) {
        if (cards[i].age >= 18) {
            const fullInfo = document.createElement('div')
            fullInfo.classList.add('user');
            
            const name = document.createElement('p')
            name.innerText = "Name: " + cards[i].first_name + " " + cards[i].last_name
            fullInfo.append(name)

            const years = document.createElement('p')
            years.innerText = "Age: " + cards[i].age
            fullInfo.append(years)
            
            pickUp.append(fullInfo)
        }
    }


