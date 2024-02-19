const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform your authentication logic here (e.g., check username and password)

    // For demonstration purposes, let's assume successful login
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    if (usernameInput.value === "Username" && passwordInput.value === "Password") {
      // Redirect to a new page (replace "newpage.html" with your actual page)
      window.location.href = "../3rd/index.html";
    } else {
      // Handle incorrect login credentials (display an error message, etc.)
      console.log("Incorrect username or password");
    }
  });
});