const searchInput = document.querySelector(".searchInput");
const searchInputButton = document.querySelector(".searchInputButton");
const downSideContainer = document.querySelector(".down-side-container");

const searchButton = () => {
  const lupeIconButton = (document.querySelector(
    ".lupeIconButton"
  ).style.visibility = "hidden");
  searchInput.style.display = "block";
  searchInputButton.style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
  downSideContainer.style.marginBottom = "10vh";
};

const searchNews = () => {
  fetch(
    `https://newsapi.org/v2/everything?q=${searchInput.value}&from=2023-04-02&to=2023-04-02&sortBy=popularity&apiKey=64b826567a8a457380cca1f368675e5c`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.body.style.backgroundColor = "white";
      const sourceName = (document.querySelector(
        ".source-name"
      ).textContent = `${data.articles[99].source.name}`);

      const description = (document.querySelector(
        ".description"
      ).textContent = `${data.articles[99].description}`);

      const author = (document.querySelector(
        ".author"
      ).textContent = `${data.articles[99].author}`);

      const title = (document.querySelector(
        ".title"
      ).textContent = `${data.articles[99].title}`);
      const title1 = (document.querySelector(
        ".title1"
      ).textContent = `${data.articles[3].title}`);
      const title2 = (document.querySelector(
        ".title2"
      ).textContent = `${data.articles[1].title}`);
      const title3 = (document.querySelector(
        ".title3"
      ).textContent = `${data.articles[2].title}`);

      const content = (document.querySelector(
        ".content"
      ).textContent = `${data.articles[99].content}`);

      const descImage = (document.querySelector(
        ".descImage"
      ).src = `${data.articles[99].urlToImage}`);
      const descImage1 = (document.querySelector(
        ".descImage1"
      ).src = `${data.articles[3].urlToImage}`);
      const descImage2 = (document.querySelector(
        ".descImage2"
      ).src = `${data.articles[1].urlToImage}`);
      const descImage3 = (document.querySelector(
        ".descImage3"
      ).src = `${data.articles[2].urlToImage}`);

      const publishedDate = (document.querySelector(
        ".publishedDate"
      ).textContent = `${data.articles[99].publishedAt}`);
    });
};

fetch(
  `https://newsapi.org/v2/everything?q=germany&from=2023-04-02&to=2023-04-02&sortBy=popularity&apiKey=64b826567a8a457380cca1f368675e5c`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const sourceName = (document.querySelector(
      ".source-name"
    ).textContent = `${data.articles[99].source.name}`);

    const description = (document.querySelector(
      ".description"
    ).textContent = `${data.articles[99].description}`);

    const author = (document.querySelector(
      ".author"
    ).textContent = `${data.articles[99].author}`);

    const title = (document.querySelector(
      ".title"
    ).textContent = `${data.articles[99].title}`);
    const title1 = (document.querySelector(
      ".title1"
    ).textContent = `${data.articles[3].title}`);
    const title2 = (document.querySelector(
      ".title2"
    ).textContent = `${data.articles[1].title}`);
    const title3 = (document.querySelector(
      ".title3"
    ).textContent = `${data.articles[2].title}`);

    const content = (document.querySelector(
      ".content"
    ).textContent = `${data.articles[99].content}`);

    const descImage = (document.querySelector(
      ".descImage"
    ).src = `${data.articles[99].urlToImage}`);
    const descImage1 = (document.querySelector(
      ".descImage1"
    ).src = `${data.articles[3].urlToImage}`);
    const descImage2 = (document.querySelector(
      ".descImage2"
    ).src = `${data.articles[1].urlToImage}`);
    const descImage3 = (document.querySelector(
      ".descImage3"
    ).src = `${data.articles[2].urlToImage}`);

    const publishedDate = (document.querySelector(
      ".publishedDate"
    ).textContent = `${data.articles[99].publishedAt}`);
  });
