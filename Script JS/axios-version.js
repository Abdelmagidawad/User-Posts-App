import { postsUser } from "./module.js";

export async function getPosts(userId) {
  let secPosts = document.querySelector(".posts-list");

  try {
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    let response = await axios.get(url);
    let posts = response.data;

    secPosts.innerHTML = " ";
    posts.slice(0, 20).forEach((post) => {
      secPosts.innerHTML += `
          <div class="post">
            <div class="title">
              <i class="fas fa-newspaper"></i>
              <h3>${post.title}</h3>
            </div>
            <p>${post.body}</p>
          </div>`;
    });
  } catch (error) {
    secPosts.innerHTML = `
         <div class="no-data">
            <i class="fas fa-user"></i> <i class="fas fa-message"></i>
            <p class="error-msg">${"No User Posts Found"}</p>
          </div>`;
    console.log(error);
  }
}

async function getUsers() {
  let secUsers = document.querySelector(".users-list");

  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let users = response.data;

    secUsers.innerHTML = " ";
    users.slice(0, 20).forEach((user) => {
      secUsers.innerHTML += `
          <div class="user" userId="${user.id}" userName="${user.name}">
            <div class="name-auth">
              <i class="fa-solid fa-user"></i>
              <h3>${user.name}</h3>
            </div>
            <p class="mail">${user.email}</p>
          </div>`;
    });
    // **********
    let allUsers = document.querySelectorAll(".user");
    postsUser(allUsers);
  } catch (error) {
    secUsers.innerHTML = `
           <div class="no-users">
            <i class="fa-solid fa-user"></i>
            <p class="error-msg">${"No Users Found"}</p>
          </div>`;
    console.log(error);
  }
}

let btnGetUsers = document.querySelector(".con-head button");
btnGetUsers.addEventListener("click", () => {
  getUsers();
});

postsUser(users);
