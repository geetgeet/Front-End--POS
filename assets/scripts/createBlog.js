function createBlogPost() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: inputs[0].value,
      body: inputs[1].value,
      userId: inputs[2].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Blog has been created");
      document.getElementById("create-form").reset();
    });
}
