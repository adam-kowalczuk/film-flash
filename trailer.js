document
  .getElementById("trailer-link")
  .addEventListener("click", function(event) {
    event.preventDefault();

    // Extract the video ID from the YouTube URL
    const trailerLink = document.getElementById("trailer-link");
    const videoId = extractYouTubeVideoId(trailerLink.href);

    // Generate the YouTube iframe embed code
    const embedCode = generateYouTubeEmbedCode(videoId);

    // Create a container for the video and insert the embed code
    const container = document.getElementById("youtube-video-container");
    container.innerHTML = embedCode;

    // Display the modal
    const modal = document.getElementById("trailer-modal");
    modal.style.display = "block";
  });

// Function to extract the YouTube video ID from the URL
const extractYouTubeVideoId = (url) => {
  const videoIdRegex = /[?&]v=([^&#]+)/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
};

// Function to generate YouTube iframe embed code
const generateYouTubeEmbedCode = (videoId) => {
  if (!videoId) {
    return "";
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.width = "550";
  iframe.height = "315";
  iframe.allowFullscreen = true;

  return iframe.outerHTML;
};

// Close the modal when the close button is clicked
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function() {
    document.getElementById("trailer-modal").style.display = "none";
  });
