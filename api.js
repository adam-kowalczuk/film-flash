const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "PLACEHOLDER"
  }
};

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    const randomNumber = Math.floor(Math.random() * 20);
    const randomMovie = response.results[randomNumber];
    const backdropPath = randomMovie.backdrop_path;

    const mainElement = document.querySelector("main");
    const title = document.getElementById("title");
    const description = document.getElementById("description");

    mainElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdropPath})`;
    title.innerHTML = randomMovie.title;
    description.innerHTML = randomMovie.overview;
    mainElement.classList.add("main-fade-in");
  })
  .catch((err) => console.error(err));
