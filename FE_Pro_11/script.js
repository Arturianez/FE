const container = document.querySelector(`.container`);
const button = document.querySelector(".button");
const listOfUsers = document.querySelector(`.userList`);


async function fetchUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Запрос на пользователей - не сработал");
    }
    const users = await response.json();
    const container = document.querySelector(`.container`);
    const listOfUsers = document.querySelector(`.userList`);
    if (listOfUsers.children.length > 0) {
        listOfUsers.innerHTML = "";
    }
    users.forEach((users) => {
      const newUser = document.createElement(`li`);
      newUser.textContent = users.username;
      listOfUsers.appendChild(newUser);
    });

    console.log(users);
    return users;
  } catch (e) {
    console.error(e.message, "Запрос на пользователей - не сработал");
  }
}

button.addEventListener("click", function () {
    if(listOfUsers.style.display === "block") {
        listOfUsers.style.display = "none"; // Элемент скрыт
    } else {
        listOfUsers.style.display = "block" // Элемент видимый
    }
    fetchUsers()
});
