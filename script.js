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
    "The North Remembers",
    "The Night Lands",
    "What Is Dead May Never Die",
    "Garden of Bones",
    "The Ghost of Harrenhal",
    "The Old Gods and the New",
    "A Man Without Honor",
    "The Prince of Winterfell",
    "Blackwater",
    "Valar Morghulis"
  ],
  S03: [
    "Valar Dohaeris",
    "Dark Wings, Dark Words",
    "Walk of Punishment",
    "And Now His Watch Is Ended",
    "Kissed by Fire",
    "The Climb",
    "The Bear and the Maiden Fair",
    "Second Sons",
    "The Rains of Castamere",
    "Mhysa"
  ],
  S04: [
    "Two Swords",
    "The Lion and the Rose",
    "Breaker of Chains",
    "Oathkeeper",
    "First of His Name",
    "The Laws of Gods and Men",
    "Mockingbird",
    "The Mountain and the Viper",
    "The Watchers on the Wall",
    "The Children"
  ],
  S05: [
    "The Wars to Come",
    "The House of Black and White",
    "High Sparrow",
    "Sons of the Harpy",
    "Kill the Boy",
    "Unbowed, Unbent, Unbroken",
    "The Gift",
    "Hardhome",
    "The Dance of Dragons",
    "Mother's Mercy"
  ],
  S06: [
    "The Red Woman",
    "Home",
    "Oathbreaker",
    "Book of the Stranger",
    "The Door",
    "Blood of My Blood",
    "The Broken Man",
    "No One",
    "Battle of the Bastards",
    "The Winds of Winter"
  ],
  S07: [
    "Dragonstone",
    "Stormborn",
    "The Queen's Justice",
    "The Spoils of War",
    "Eastwatch",
    "Beyond the Wall",
    "The Dragon and the Wolf"
  ],
  S08: [
    "Winterfell",
    "A Knight of the Seven Kingdoms",
    "The Long Night",
    "The Last of the Starks",
    "The Bells",
    "The Iron Throne"
  ]
};

// Select Elements
const seasonSelect = document.getElementById("season");
const episodesDiv = document.getElementById("episodes");

// Load Episodes for Selected Season
function loadEpisodes(season) {
  episodesDiv.innerHTML = ""; // Clear previous episodes

  const seasonEpisodes = episodes[season];

  if (seasonEpisodes) {
    // Display all episodes for the selected season
    seasonEpisodes.forEach((title, index) => {
      // Create Episode Card
      const card = document.createElement("div");
      card.classList.add("episode-card");

      card.innerHTML = `
        <img src="IMG_0722.png" alt="Episode Image">
        <h3>Episode ${index + 1}: ${title}</h3>
        <a href="#" class="play-btn">Play</a>
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
