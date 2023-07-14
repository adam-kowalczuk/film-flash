const id = 1070802;

fetch(`https://film-flash.netlify.app/.netlify/functions/videos?id=${id}`)
  .then((res) => res.json())
  .then((data) => console.log("Test Data: ", data.videos.results))
  .catch((error) => console.error("Error", error));
