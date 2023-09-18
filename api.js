const kebabCase = function (title) {
  const punctuationPattern = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const newTitle = title.replaceAll(punctuationPattern, "");
  return newTitle.toLowerCase().split(" ").join("-");
};

fetch("https://film-flash.netlify.app/.netlify/functions/now-playing")
  .then((response) => response.json())
  .then((response) => {
    const randomNumber = Math.floor(Math.random() * 20);
    const randomMovie = response.results[randomNumber];
    const backdropPath = randomMovie.backdrop_path;
    const movieId = randomMovie.id;

    const kebabTitle = kebabCase(randomMovie.title);

    fetch(
      `https://film-flash.netlify.app/.netlify/functions/videos?id=${movieId}`
    )
      .then((response) => response.json())
      .then((movieResponse) => {
        const trailer = movieResponse.videos.results.find((video) =>
          /trailer/i.test(video.name)
        );
        const trailerKey = trailer.key;
        const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

        const mainElement = document.querySelector("main");
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const info = document.getElementById("info");
        const trailerLink = document.getElementById("trailer-link");
        const showtimes = document.getElementById("showtimes");
        const currentYear = new Date().getFullYear();

        mainElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdropPath})`;
        title.innerHTML = randomMovie.title;
        description.innerHTML = randomMovie.overview;
        info.href = `https://www.themoviedb.org/movie/${movieId}`;
        trailerLink.href = trailerUrl;
        showtimes.href = `https://www.cinemaclock.com/movies/${kebabTitle}-${currentYear}/showtimes`;

        mainElement.classList.add("main-fade-in");
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
