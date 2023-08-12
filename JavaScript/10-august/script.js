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

const button = document.querySelector('.button')
const root2 = document.querySelector('.root2')

button.addEventListener('click', function(){
    const paragraph1 = document.createElement('p')
    paragraph1.classList.add('pColor1')
    paragraph1.innerText = "Измененный параграф"
    root2.append(paragraph1)
    
    const paragraph2 = document.createElement('p')
    paragraph2.classList.add('pColor2')
    paragraph2.innerText = "Измененный параграф"
    root2.append(paragraph2)

})

