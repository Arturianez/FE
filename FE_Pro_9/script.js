// 2 задачи отсюда мы делали на занятии. Повторить promise, async await, fetch 
// ( понять, что конкретно возвращает фетч), проработать подробнее .then, .catch, try catch конструкцию
// Задача. Используя async await по id комментария выведите в консоль текст поста и комментарий.
// +
// Задача. Доработайте прошлое решение таким образом, чтобы помимо текста поста выводилось имя автора.

// async function getCom(comId) {
//     try {
//         const getIdCom = await fetch(`https://jsonplaceholder.typicode.com/comments/${comId}`)
//         return await getIdCom.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function getPost(postId) {
//     try {
//         const getIdPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         return await getIdPost.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function getUser(userId) {
//     try {
//         const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         return await userResponse.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function totalComAndPostWithAuthor(comId) {
//     try {
//         const comment = await getCom(comId)
//         const post = await getPost(comment.postId)
//         const user = await getUser(post.userId)
//         return {comment,post,user}
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function main() {
//     try {
//         const finalInfo = await totalComAndPostWithAuthor(5)
//         console.log("Comment:  ", finalInfo.comment)   
//         console.log("Text of post: ", finalInfo.post)
//         console.log("Author: ", finalInfo.user.name)
//     } catch (error) {
//         console.log(error)
//     }
// }
// main()


// Задача. Создать функцию, которая получает id комментария находит id поста. 
// По этому идентификатору необходимо вывести все комментарии к этому посту. 
// https://jsonplaceholder.typicode.com/comments?postId=<номер поста>.
// +
// Задача. Доработайте функцию из прошлого задания таким образом, чтобы помимо id она получала callback функцию. 
// Данная функция должна формировать карточки с текстом комментария. 

async function getComId(comId) {
    try {
        const getId = await fetch(`https://jsonplaceholder.typicode.com/comments/${comId}`)
        return await getId.json();
    } catch (error) {
        console.log(error);
    }
}

async function comment(comId) {
    try {
        const com = await getComId(comId);
        return com;
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    try {
        const getCom = await comment(1);
        console.log("Комментарий ID: ", getCom.id);
        console.log("Комментарий: ", getCom.name)
    } catch (error) {
        console.log(error);
    }
}

main();

// Задача. Добавьте в интерфейс форму, которая позволит получать id поста, чьи комментарии необходимо вывести.
// Не понял что хотят в данном задании, как будто бы это предыдущее задание => Создать функцию, которая получает id комментария находит id поста.