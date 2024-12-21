// Episodes Data
const episodes = {
  S01: [
    "Winter Is Coming",
    "The Kingsroad",
    "Lord Snow",
    "Cripples, Bastards, and Broken Things",
    "The Wolf and the Lion",
    "A Golden Crown",
    "You Win or You Die",
    "The Pointy End",
    "Baelor",
    "Fire and Blood"
  ],
  S02: [
    // Add Season 2 episode names here
  ],
  // Add other seasons' episode names similarly
};

// Select Elements
const seasonSelect = document.getElementById("season");
const episodesDiv = document.getElementById("episodes");

// Load Episodes for Selected Season
function loadEpisodes(season) {
  episodesDiv.innerHTML = ""; // Clear previous episodes
  const seasonEpisodes = episodes[season];

  if (seasonEpisodes) {
    seasonEpisodes.forEach((title, index) => {
      // Create Episode Card
      const card = document.createElement("div");
      card.classList.add("episode-card");

      card.innerHTML = `
        <img src="https://via.placeholder.com/200x120?text=Game+of+Thrones" alt="Episode Image">
        <h3>Episode ${index + 1}: ${title}</h3>
        <a href="#" class="play-btn">Play</a>
      `;

      episodesDiv.appendChild(card);
    });
  }
}

// Event Listener
seasonSelect.addEventListener("change", (e) => {
  loadEpisodes(e.target.value);
});

// Initial Load
loadEpisodes("S01");
