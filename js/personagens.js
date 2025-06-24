const personagensContainer = document.querySelector(".conteiner__Personagens");
const imagens = Array.from(
  personagensContainer.querySelectorAll(".img__persona")
);

function shuffleImages() {
  // Remove all images from the container
  imagens.forEach((img) => personagensContainer.removeChild(img));

  // Shuffle the array of images (Fisher-Yates algorithm)
  for (let i = imagens.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagens[i], imagens[j]] = [imagens[j], imagens[i]]; // Swap elements
  }

  // Append the shuffled images back to the container
  imagens.forEach((img) => personagensContainer.appendChild(img));
}

// Call shuffleImages initially to randomize on page load if desired
// shuffleImages();

// Change image positions every 60 seconds (1 minute)
setInterval(shuffleImages, 6000);
