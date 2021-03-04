function searchBlog() {
  const searchForm = document.getElementById("search-form");
  const search = searchForm.getElementsByTagName("input")[0].value;
  // Fetch the data
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(search);
      let matchedSearch = json.filter((data) => {
        return data.title == search;
      });
      document.getElementById("blog-items").innerHTML = "";
      matchedSearch.forEach((blog) => createBlogItem(blog));
    });
}
