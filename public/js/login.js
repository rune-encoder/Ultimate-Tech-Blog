const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (!name || !password) {
    alert("Form must not be empty");
    return;
  }

  if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace(`/`);
    } else {
      alert(response.statusText);
    }
  }
};

// Click the login button
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
