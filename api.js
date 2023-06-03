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
    const randomMovie = Math.floor(Math.random() * 20);
    const backdropPath = response.results[`${randomMovie}`].backdrop_path;
    const mainElement = document.querySelector("main");
    mainElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdropPath})`;
    mainElement.classList.add("main-fade-in");
  })
  .catch((err) => console.error(err));
