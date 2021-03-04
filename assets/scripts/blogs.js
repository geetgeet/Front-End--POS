function getPosts() {
  // Get element to change
  let list = document.getElementById("blog-items");

  // Fetch the data
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((blog) => createBlogItem(blog));
    });
}

function createBlogItem(blog) {
  const item = `<li><a href="./blog.html?blogID=${blog.id}"><strong>${blog.title}</strong><a/></li>`;
  let list = document.getElementById("blog-items");
  console.log("Hello");
  list.innerHTML += item;
}

getPosts();
