// // В данном блоке дз вы видите 10 задач по нарастающей сложности на отработку асинхронности и отправки запросов!
// // Создайте функцию, которая делает Fetch-запрос к JSON Placeholder API для получения списка пользователей и выводит их в консоль.

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((responese) => responese.json())
//     .then((users) => console.log(users))

// // Модифицируйте предыдущую функцию так, чтобы она возвращала Promise с данными о пользователях,
// а затем вызовите этот Promise и выведите результат в консоль.

// async function fetchUsers() {
//     try {
//         const userInfo = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         const userJson = await userInfo.json()
//         console.log(userJson)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchUsers()

// // Создайте функцию, которая делает Fetch-запрос к JSON Placeholder API для получения списка постов конкретного пользователя
// (по его ID) и выводит их в консоль.
// +
// // Модифицируйте предыдущую функцию так, чтобы она принимала параметр (ID пользователя) и возвращала Promise
// с данными о постах этого пользователя.

// async function fetchPosts(userId) {
//     const url = `https://jsonplaceholder.typicode.com/posts/${userId}`
//     try {
//         const response = await fetch(url)
//         const getPost = await response.json()
//         console.log(getPost)
//     } catch (e) {
//         console.error(e.message, "Запрос posts - не выполнен")
//     }
// }
// fetchPosts(5)

// // Создайте функцию, которая делает Fetch-запрос для создания нового поста на JSON Placeholder API и выводит
// созданный пост в консоль.
// +
// // Модифицируйте предыдущую функцию так, чтобы она принимала параметры (заголовок, текст)
// для создания поста и возвращала Promise с созданным постом.

// async function fetchPosts() {
//     const url = `https://jsonplaceholder.typicode.com/posts`
//     try {
//         const newPost = {title: 'Тут находится заголовок поста', Text: 'Тут находится текст поста'}
//         console.log(newPost)
//     } catch (error) {
//         console.error(e.message, "Запрос posts - не выполнен")
//     }
// }
// fetchPosts()

// // Создайте функцию, которая делает Fetch-запрос для обновления существующего поста на JSON Placeholder API и
// выводит обновленный пост в консоль.
// +
// // Модифицируйте предыдущую функцию так, чтобы она принимала параметры (ID поста, новый заголовок, новый текст)
// для обновления поста и возвращала Promise с обновленным постом.

// async function fetchPosts(postId) {
//   try {
//     const getPost = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`
//     );
//     return await getPost.json();
//   } catch (e) {
//     console.error(e.message, "Запрос posts - не выполнен");
//   }
// }

// async function posts(postId) {
//   try {
//     const post = await fetchPosts(postId);
//     return post;
//   } catch (e) {
//     console.error(e.message, "Запрос присвоения поста - не выполнен");
//   }
// }

// async function main() {
//   try {
//     const oldPost = await posts(4);
//     console.log("Запрос. Даныне по userId: ", oldPost.userId)
//     console.log("Запрос. Данные по ID: ", oldPost.id);
//     console.log("Запрос. Данные по заголовку: ", oldPost.title);
//     console.log("Запрос. Данные по тексту: ", oldPost.body);
//   } catch (e) {
//     console.error(e.message, "Запрос данных на изменения поста - не выполнен");
//   }
// }
// main();

// async function newPost() {
//   try {
//     const updatedPost = main.oldPost.update({
//       userId: 15,
//       id: 896,
//       title: "New title here",
//       body: "New text here",
//     });
//     console.log(updatedPost);
//   } catch (e) {
//     console.error(e.message, "Запрос на создание нового поста - не выполнен");
//   }
// }
// newPost()

// // Создайте функцию, которая делает Fetch-запрос для удаления существующего поста на JSON Placeholder API и
// выводит сообщение об успешном удалении в консоль.
// +
// // Модифицируйте предыдущую функцию так, чтобы она принимала параметр (ID поста) для удаления поста и возвращала
// Promise с сообщением об успешном удалении.

async function getPost(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
  try {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          
        },
        body: null
    })
    const posts = await response.json()
    console.log(posts, " Пост с ID номер: ", postId, " удален");
  } catch (e) {
    console.error(e.message, "Запрос на получение постов - не сработал")
  }
}

getPost(3)
