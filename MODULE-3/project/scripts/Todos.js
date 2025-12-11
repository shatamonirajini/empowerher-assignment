import { displayTodos } from "./displayTodos.js";

// Check login
if (localStorage.getItem("loggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}

// Fetch Todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    displayTodos(data);
  })
  .catch(err => console.log("Error fetching todos", err));
