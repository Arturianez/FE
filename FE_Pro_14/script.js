// Вытащить посты из JSON placeholder и по клику вытаскивать их по одному
//  ( на занятии мы переключали, а сейчас по одному достаем)

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const forPosts = document.querySelector('.forPosts')
let counter = 0



function createElement(dataPosts) {
    // forPosts.innerHTML = ''
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.textContent = dataPosts.title
    p.textContent = dataPosts.body
    forPosts.append(h3,p)
}

async function getPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
        const dataPosts = await response.json()
        console.log(dataPosts);
        createElement(dataPosts)
    } catch (e) {
        console.error(e.message, "Запрос на посты - не выполнен")
    }
}


btn1.addEventListener('click', function(){
    if( counter > 1) {
        counter --
        getPosts()
    }
})
btn2.addEventListener('click', function(){
    counter ++
    forPosts.classList.add('active')
    getPosts()
})

// 2) первое исправление:
// function multiply(a, b){
//     return a * b
//   }
//   multiply(1,3)

// 3) второе исправление: 
// function evenOrOdd(number) {
//     if(number % 2 === 0 ) {
//       console.log(number, "- even")
//     } else {
//       console.log(number, "- Odd")
//     }
//   }
//   evenOrOdd(2)
// в codewras пишет что не верно