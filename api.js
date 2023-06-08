const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "PLACEHOLDER"
  }
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
    const movieLink = document.getElementById("movie-link");
    const movieId = randomMovie.id;

    // Update the fetch URL to retrieve the specific movie details, including videos
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=videos`,
      options
    )
      .then((response) => response.json())
      .then((movieResponse) => {
        // Retrieve the movie trailer details from the fetched data
        const trailer = movieResponse.videos.results.find((video) =>
          /trailer/i.test(video.name)
        );
        const trailerKey = trailer.key;
        const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

        mainElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdropPath})`;
        title.innerHTML = randomMovie.title;
        movieLink.href = trailerUrl;
        description.innerHTML = randomMovie.overview;

        mainElement.classList.add("main-fade-in");
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
