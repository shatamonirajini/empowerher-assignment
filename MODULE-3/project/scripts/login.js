const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid Credentials!");
  }
});
