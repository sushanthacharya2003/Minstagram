let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
    image: "https://files.codingninjas.in/image2-28694.jpg",
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
    image: "https://files.codingninjas.in/oip-28704.jpg",
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
    image: "https://files.codingninjas.in/th-2-28706.jpg",
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
    image: "https://files.codingninjas.in/image1-28708.jpg",
  },
];

const likedPosts = new Set();

function renderPosts() {
  const postsContainer = document.getElementById("posts");
  if (!postsContainer) return;
  postsContainer.innerHTML = "";

  postsData.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const authorElement = document.createElement("h3");
    authorElement.textContent = post.author;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    const imageElement = document.createElement("img");
    imageElement.src = post.image;
    imageElement.alt = "Post Image";

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", () => {
      if (!likedPosts.has(post.id)) {
        likePost(post.id);
        likedPosts.add(post.id);
        likeButton.disabled = true;
        likeButton.style.backgroundColor = "red";
      }
    });

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Write a comment...";

    const commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.classList.add("comment-button");
    commentButton.addEventListener("click", () => {
      addComment(post.id, commentInput.value);
      commentInput.value = "";
    });

    const postFooter = document.createElement("div");
    postFooter.classList.add("post-footer");
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments-container");
    commentsContainer.style.display = "none";

    post.comments.forEach((comment) => {
      const commentElement = document.createElement("p");
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });

    postFooter.addEventListener("click", () => {
      commentsContainer.style.display =
        commentsContainer.style.display === "none" ? "block" : "none";
    });

    postElement.appendChild(authorElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postsContainer.appendChild(postElement);
  });
}

function likePost(postId) {
  const post = postsData.find((p) => p.id === postId);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

function addComment(postId, comment) {
  const post = postsData.find((p) => p.id === postId);
  if (post && comment.trim()) {
    post.comments.push(comment);
    renderPosts();
  }
}

function handlePostCreation(event) {
  event.preventDefault();

  const postInput = document.getElementById("postInput");
  const imageInput = document.getElementById("imageInput");

  // Get the values from the form inputs
  const content = postInput.value;
  const imageFile = imageInput.files[0];

  // Create image URL as specified in the readme hints
  const imageURL = URL.createObjectURL(imageFile);

  // Create new post object
  const newPost = {
    id: postsData.length + 1,
    author: "You",
    content: content,
    image: imageURL,
    likes: 0,
    comments: [],
  };

  // Add the new post to posts array
  postsData.push(newPost);

  // Update the display
  renderPosts();

  // Reset the form
  document.getElementById("postForm").reset();
}

// Add submit event listener to the form as specified in the readme
const postForm = document.getElementById("postForm");
postForm.addEventListener("submit", handlePostCreation);

// Initial render of posts
renderPosts();
