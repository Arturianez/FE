// Домашнее задание 10.
// Решить следующие задачи:
// 1. Создать кнопку "Создать картинку" и пустой div. При клике на кнопку в 
// div создается изображение (img). 
// // Изображение произвольное.

// const createImg = document.querySelector('#createImg')
// const imgContainer = document.querySelector('#imgContainer')
// createImg.addEventListener('click',function(){
//     const image = document.createElement('img')
//     image.src = './img/img1.jpg'
//     imgContainer.append(image)
// })
// setAttribute' - можно через него


// 2. Создать кнопку и пустой div. При клике на кнопку создавать внутри 
// div параграф с произвольным текстом. 

// const emptyDiv = document.querySelector('.emptyDiv')
// const emptyWords = document.querySelector('#emptyWords')
// emptyDiv.addEventListener('click', function(){
//     const text = document.createElement('p')
//     text.innerText = "Произвольный текст добавлен"
//     emptyWords.append(text)
// })




// 3. // setAttribute() для решения данной задачи
// Повесить обработчик на нажатие клавиш клавиатуры и при вводе букв их в параграф. 
// // Для решения этой задачи понадобится использование объекта event.
// В этом примере мы добавляем обработчик события keydown на весь документ. 
// Когда происходит нажатие клавиши, мы проверяем, является ли 
// нажатая клавиша буквой (не пробелом и имеет длину 1 символа). 
// Если это так, то мы получаем текущий текст из параграфа, 
// добавляем новую букву и обновляем содержимое параграфа.

// const outputParagraph = document.getElementById('output-paragraph');
// document.addEventListener('keydown', (event) => {
//   if (event.key.length === 1 && event.key !== ' ') {
//     const currentText = outputParagraph.textContent.slice(6);
//     outputParagraph.textContent =  `${currentText}${event.key}`;
//   }
// });


// 1ый блок. Написать программу, которая формирует на основе массива строк 
// множество параграфов и выводит их в интерфейс. 

const paragraph = document.querySelector('.paragraph')
const emptyDiv = document.querySelector('.emptyDiv')
const lines = ["Paragraph 1", "Paragraph 2", "Paragraph 3"]
const images = ['..img/img1.jpg', '..img/img2.jpg', '..img/img3.jpg']


function createParagraphs() {
        // Очищаем содержимое div перед созданием новых параграфов, запомнить!
        emptyDiv.innerHTML = "";
    for (i=0; i < lines.length; i++) {
        textPar = document.createElement('p');
        textPar.textContent = lines[i];
        emptyDiv.append(textPar);
    }
}
paragraph.addEventListener('click',createParagraphs)

// 2ой блок. При клике на параграф текст должен меняться на звездочки.
// В js объявлен массив с ссылками на картинки. 

emptyDiv.addEventListener("click", function(event) { // event указание цели проверки
    if (event.target.tagName === "P") { // проверяем чтобы событие и его цель точно совпадали с именем, то есть с параграфом. Почему Р большая, уточнить
        event.target.textContent = "*".repeat(event.target.textContent.length); // repeat повторяет соразмерно кол-ву символов
    }
});

// 3ий блок. На основе этого массива формируется множество маленьких картинок 
// в верхней части интерфейса. 

function showImages() {
    const imageContainer = document.querySelector('#small-image-container')
    images.forEach((imageName) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageName;
        imageElement.classList.add('image');
        imageContainer.append(imageElement);
    });
    //или
    // for(i=0; i < images.length; i++) {
    //     const img = document.createElement('img')
    //     img.src = images[i]
    //     imageContainer.append(img)
    // } // я почти час потратил на поиск почему нет вывода картинок, а только окантовка их, вариантов нет, сдаюсь
}
paragraph.addEventListener('click',showImages)

// 4ый блок. При нажатии на одну из картинок забирается ссылка на эту картинку и 
// в нижней части интерфейса отображается в большем размере. 
// Так, пользователь нажимая на маленькие картинки видит 
// их отображение в большем размере.

// может надо через event, но после 4 часов уже голова в теме которую итак не знаешь не варит
const bigImage = document.querySelector('#big-image-container')
const imagesAll = document.getElementsByClassName('image');
for (i=0; i < images.length; i++) {
    imagesAll[i].addEventListener('click', function(){
        const imageUrl = this.src
        bigImage.src = imageUrl
    })
}


  



