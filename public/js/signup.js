const signupFormHandler = async (event) => {
  event.preventDefault();

  console.log("click");
  // Collect values from the signup form
  const name = document.querySelector("#user-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Send a POST request to the API endpoint
  if (name && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });
    // If successful, redirect the browser to the dashboard page
    if (response.ok) {
      console.log(response);
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);