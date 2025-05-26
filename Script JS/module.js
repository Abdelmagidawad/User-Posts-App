// using Fetch version
import { getPosts } from "./fetch-version.js";

// using  Axios version
// import { getPosts } from "./axios-version.js";

export function postsUser(users) {
  users.forEach((user) => {
    let id = user.getAttribute("userId");
    let name = user.getAttribute("userName");

    user.addEventListener("click", () => {
      getPosts(id);
      //
      let coinName = document.querySelector(".head-sec-p h2");
      coinName.innerHTML = name;
      users.forEach((user) => {
        user.classList.remove("selected");
      });
      user.classList.add("selected");
      //
    });
  });
}
