// Get data from URL
const params = new URLSearchParams(window.location.search);

// Get elements to change
const product_name = document.getElementById("blog-title");
const product_price = document.getElementById("blog-body");
const Product_image = document.getElementById("comments");

if (params.has("blogID")) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.get("blogID")}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      title.innerHTML = json.title;
      body.innerHTML = json.body;
      getComments(json.id);
    });
} else {
  window.location.href = "./404.html";
}

function getComments(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((json) => json.forEach((comment) => createComment(comment)));
}

function createComment(comment) {
  const listItem = `
    <li>
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
    </li>
    `;

  comments.innerHTML += listItem;
}
