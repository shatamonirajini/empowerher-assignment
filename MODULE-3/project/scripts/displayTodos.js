export function displayTodos(data) {
  let container = document.getElementById("todos");

  container.innerHTML = ""; // clear

  data.forEach(todo => {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px 0";

    div.innerHTML = `
      <h3>Title: ${todo.title}</h3>
      <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
    `;

    container.appendChild(div);
  });
}
