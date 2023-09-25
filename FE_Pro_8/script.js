// Задачи для GET запросов:
// Получить список всех пользователей:
// Использовать URL: https://jsonplaceholder.typicode.com/users
// Метод: GET

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(json => console.log(json))

// Получить список всех постов:
// URL: https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(json => console.log(json))

// Получить информацию о конкретном пользователе по его ID (например, ID = 1):
// URL: https://jsonplaceholder.typicode.com/users/1

// function infoId(id,getName) {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         getName(data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
// infoId(2,function(userData){
//     console.log("Данные пользователя с id", ':',userData)
// })

// Получить список постов, опубликованных одним конкретным пользователем
// (например, пользователь с ID = 1):
// URL: https://jsonplaceholder.typicode.com/posts?userId=1

// function getPosts(id,savePosts) {
//     const url = `https://jsonplaceholder.typicode.com/posts/${id}`
//     fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(post){
//         savePosts(post)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
// getPosts(4,function(userPost){
//     console.log("Пост пользователя с ID: ", userPost)
// })

// Задачи для POST запросов:
// Создать нового пользователя:
// URL: https://jsonplaceholder.typicode.com/users
// Метод: POST
// Тело запроса (JSON):
// {
//     "name": "Имя пользователя",
//     "username": "Имя пользователя",
//     "email": "email@example.com"
// }
// Создать новый пост от имени определенного пользователя
// (например, пользователь с ID = 1):
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    name: "James",
    username: "Force21",
    email: "kings83@gmail.com",
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => console.log(data));


// Задача. Создать форму в интерфейсе, которая принимает title, body и userId и 
// с этими данными отправляет
// запрос на сервер. Запрос можно взять из прошлого примера. Ответ сервера вывести в консоль.


// Задача. Создать функцию, которая генерирует карточку с постом и использовать ее для отображения данных,
// пришедших с сервера. В качестве запроса на сервер используйте результат прошлого задания.
