const searchNews = () => {
  const searchInput = document.querySelector(".searchInput");
  fetch(
    `https://newsapi.org/v2/everything?q=${searchInput.value}&from=2023-04-02&to=2023-04-02&sortBy=popularity&apiKey=64b826567a8a457380cca1f368675e5c`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.articles.forEach((article, index) => {
        const sourceName = document.querySelector(`.source-name-${index}`);
        const description = document.querySelector(`.description-${index}`);
        const author = document.querySelector(`.author-${index}`);
        const title = document.querySelector(`.title-${index}`);
        const content = document.querySelector(`.content-${index}`);

        const descImage = document.querySelector(`.descImage-${index}`);
        const publishedDate = document.querySelector(`.publishedDate-${index}`);

        sourceName.textContent = `${article.source.name}`;
        description.textContent = `${article.description}`;
        descImage.src = `${article.urlToImage}`;
        title.textContent = `${article.title}`;
        content.textContent = `${article.content}`;
        author.textContent = `${article.author}`;
        publishedDate.textContent = `${article.publishedAt}`;
      });
    });

  //   fetch(
  //     `https://newsapi.org/v2/everything?q=apple&from=2023-04-02&to=2023-04-02&sortBy=popularity&apiKey=64b826567a8a457380cca1f368675e5c`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
};
