// Episodes Data with Links
const episodes = {
  S01: [
    { title: "Winter Is Coming", link: "http://got-s01-e01" },
    { title: "The Kingsroad", link: "http://got-s01-e02" },
    { title: "Lord Snow", link: "http://got-s01-e03" },
    { title: "Cripples, Bastards, and Broken Things", link: "http://got-s01-e04" },
    { title: "The Wolf and the Lion", link: "http://got-s01-e05" },
    { title: "A Golden Crown", link: "http://got-s01-e06" },
    { title: "You Win or You Die", link: "http://got-s01-e07" },
    { title: "The Pointy End", link: "http://got-s01-e08" },
    { title: "Baelor", link: "http://got-s01-e09" },
    { title: "Fire and Blood", link: "http://got-s01-e10" }
  ],
  S02: [
    { title: "The North Remembers", link: "http://got-s02-e01" },
    { title: "The Night Lands", link: "http://got-s02-e02" },
    { title: "What Is Dead May Never Die", link: "http://got-s02-e03" },
    { title: "Garden of Bones", link: "http://got-s02-e04" },
    { title: "The Ghost of Harrenhal", link: "http://got-s02-e05" },
    { title: "The Old Gods and the New", link: "http://got-s02-e06" },
    { title: "A Man Without Honor", link: "http://got-s02-e07" },
    { title: "The Prince of Winterfell", link: "http://got-s02-e08" },
    { title: "Blackwater", link: "http://got-s02-e09" },
    { title: "Valar Morghulis", link: "http://got-s02-e10" }
  ],
  S03: [
    { title: "Valar Dohaeris", link: "http://got-s03-e01" },
    { title: "Dark Wings, Dark Words", link: "http://got-s03-e02" },
    { title: "Walk of Punishment", link: "http://got-s03-e03" },
    { title: "And Now His Watch Is Ended", link: "http://got-s03-e04" },
    { title: "Kissed by Fire", link: "http://got-s03-e05" },
    { title: "The Climb", link: "http://got-s03-e06" },
    { title: "The Bear and the Maiden Fair", link: "http://got-s03-e07" },
    { title: "Second Sons", link: "http://got-s03-e08" },
    { title: "The Rains of Castamere", link: "http://got-s03-e09" },
    { title: "Mhysa", link: "http://got-s03-e10" }
  ],
  S04: [
    { title: "Two Swords", link: "http://got-s04-e01" },
    { title: "The Lion and the Rose", link: "http://got-s04-e02" },
    { title: "Breaker of Chains", link: "http://got-s04-e03" },
    { title: "Oathkeeper", link: "http://got-s04-e04" },
    { title: "First of His Name", link: "http://got-s04-e05" },
    { title: "The Laws of Gods and Men", link: "http://got-s04-e06" },
    { title: "Mockingbird", link: "http://got-s04-e07" },
    { title: "The Mountain and the Viper", link: "http://got-s04-e08" },
    { title: "The Watchers on the Wall", link: "http://got-s04-e09" },
    { title: "The Children", link: "http://got-s04-e10" }
  ],
  // Add other seasons following this pattern...
};

// Select Elements
const seasonSelect = document.getElementById("season");
const episodesDiv = document.getElementById("episodes");

// Load Episodes for Selected Season
function loadEpisodes(season) {
  episodesDiv.innerHTML = ""; // Clear previous episodes

  const seasonEpisodes = episodes[season];

  if (seasonEpisodes) {
    seasonEpisodes.forEach((episode, index) => {
      // Create Episode Card
      const card = document.createElement("div");
      card.classList.add("episode-card");

      card.innerHTML = `
        <img src="IMG_0722.png" alt="Episode Image">
        <h3>Episode ${index + 1}: ${episode.title}</h3>
        <a href="${episode.link}" target="_blank" class="play-btn">Play</a>
      `;

      // Add the card to the episodes container
      episodesDiv.appendChild(card);
    });
  }
}

// Event Listener for Season Selection
seasonSelect.addEventListener("change", (e) => {
  loadEpisodes(e.target.value);
});

// Initial Load - Default Season 1
loadEpisodes("S01");
