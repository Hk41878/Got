const episodes = {
  S01: [
    { title: "Winter Is Coming", link: "https://home.mycloud.com/action/share/f9b47750-83da-4cd6-82f1-d0d528461b9a" },
    { title: "The Kingsroad", link: "https://home.mycloud.com/action/share/773f1c24-1037-4b48-8b18-e43d9c6e85de" },
    { title: "Lord Snow", link: "http://got-s01-e03" },
    { title: "Cripples, Bastards, and Broken Things", link: "http://got-s01-e04" },
    { title: "The Wolf and the Lion", link: "http://got-s01-e05" },
    { title: "A Golden Crown", link: "http://got-s01-e06" },
    { title: "You Win or You Die", link: "http://got-s01-e07" },
    { title: "The Pointy End", link: "http://got-s01-e08" },
    { title: "Baelor", link: "http://got-s01-e09" },
    { title: "Fire and Blood", link: "http://got-s01-e10" }
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
    seasonEpisodes.forEach((episode, index) => {
      const card = document.createElement("div");
      card.classList.add("episode-card");

      card.innerHTML = `
        <img src="thumbnail.jpg" alt="Episode Image">
        <h3>Episode ${index + 1}: ${episode.title}</h3>
        <button class="load-btn" data-url="${episode.link}" data-title="${episode.title}" onclick="fetchContentAndOpen(this)">Load</button>
      `;

      // Check if this is the last played episode and set it accordingly
      const lastPlayed = localStorage.getItem('lastPlayedEpisode');
      if (lastPlayed === episode.title) {
        const button = card.querySelector('button');
        button.style.backgroundColor = 'purple'; // Change background to purple
        button.innerHTML = 'Last Played'; // Optionally change the text
      }

      episodesDiv.appendChild(card);
    });
  }
}

// Event Listener for Season Selection
seasonSelect.addEventListener("change", (e) => {
  const selectedSeason = e.target.value;
  localStorage.setItem('selectedSeason', selectedSeason); // Save the selected season to localStorage
  loadEpisodes(selectedSeason);
});

// Initial Load - Check for saved season and last played episode
const savedSeason = localStorage.getItem('selectedSeason') || 'S01'; // Default to S01 if no saved season
seasonSelect.value = savedSeason; // Set the select input to the saved season
loadEpisodes(savedSeason);

// Fetch Content and Open OG Image
function fetchContentAndOpen(button) {
  // Reset all buttons to "Load" state and remove any previous purple color
  const allButtons = document.querySelectorAll('.load-btn, .play-btn');
  allButtons.forEach((btn) => {
    btn.innerHTML = 'Load';
    btn.classList.remove('play-btn');
    btn.classList.add('load-btn');
    btn.style.backgroundColor = ''; // Reset background color
  });

  // Change the clicked button background to purple and text to "Last Played"
  button.style.backgroundColor = '#4caf50';
  button.innerHTML = 'Last Played';
  
  // Store the last played episode title in localStorage
  localStorage.setItem('lastPlayedEpisode', button.getAttribute("data-title"));

  const url = button.getAttribute("data-url");

  fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const metaTag = doc.querySelector('meta[property="og:image"]');

      if (metaTag && metaTag.getAttribute('content')) {
        let imageUrl = metaTag.getAttribute('content');

        // Change clicked button to play
        button.innerHTML = 'Play';
        button.classList.remove('load-btn');
        button.classList.add('play-btn');

        // Set the play button to open the OG image URL in VLC
        button.onclick = () => {
          window.location.href = `vlc://${imageUrl}`; // Opens in VLC
          button.innerHTML = 'Replay';
          button.onclick = () => {
            window.location.href = `vlc://${imageUrl}`; // Replays in VLC
          };
        };
      } else {
        alert('OG Image not found!');
      }
    })
    .catch(error => {
      console.error('Error fetching content:', error);
      alert('Failed to fetch content from the provided URL.');
    });
}
