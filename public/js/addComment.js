const addComment = document.querySelector('#add-comment');

// Toggle Comment Bubble
const toggleCommentForm = async () => {
  if (addComment.classList.contains("hide")) {
    addComment.classList.remove("hide");
  } else {
    addComment.classList.add("hide");
  }
};

const commentFormHandler = async (event) => {
  event.preventDefault();

  // Comment Contents
  const content = document.querySelector("#comment").value.trim();

  // Commenting User's ID obtaining Data Attribute from HTML
  const user_id = document.querySelector("#comment").dataset.user;

  // Post ID obtained using the end of the URL.
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (content && user_id && post_id) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, user_id, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful reload page.
      location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

// Submit Comment Button
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);

// Toggle Comment Bubble
document
  .querySelector("#btn-post")
  .addEventListener("click", toggleCommentForm);
