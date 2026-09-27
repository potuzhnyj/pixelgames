// Demo data: rating is out of 10; popularity is a fictional score out of 100.
const gamesLibrary = [
  {
    title: "Ashen Horizons",
    rating: 9.1,
    popularity: 92,
    img: "./assets/covers/01-ashen-horizons.webp",
    tags: ["RPG", "Open World", "Single-player"],
    description:
      "Wander through the ashes of a fallen kingdom. Discover what survived, and decide what deserves to live again.",
  },
  {
    title: "Blood & Blossom",
    rating: 8.8,
    popularity: 96,
    img: "./assets/covers/02-blood-and-blossom.webp",
    tags: ["Action", "Story Rich", "Single-player"],
    description:
      "Follow a wandering samurai through a land torn apart by old loyalties. Every duel brings you closer to someone you once called a friend.",
  },
  {
    title: "The Fifth Echo",
    rating: 9.0,
    popularity: 85,
    img: "./assets/covers/03-the-fifth-echo.webp",
    tags: ["Adventure", "Puzzle", "Co-op"],
    description:
      "Cross the desert toward a monument no one remembers building. Solve its ancient puzzles to discover why it has been waiting for you.",
  },
  {
    title: "Iron Reach",
    rating: 8.6,
    popularity: 88,
    img: "./assets/covers/04-iron-reach.webp",
    tags: ["Strategy", "Base Building", "Co-op"],
    description:
      "Build a home on the shoulders of a wandering machine. Keep your people safe as you search for somewhere worth stopping.",
  },
  {
    title: "Maple Hollow",
    rating: 8.7,
    popularity: 94,
    img: "./assets/covers/05-maple-hollow.webp",
    tags: ["Simulation", "Crafting", "Co-op"],
    description:
      "Bring an old lakeside cottage back to life with furniture and tools you craft yourself. Grow a garden, meet your neighbors, and find your own pace.",
  },
  {
    title: "The Sunken Bell",
    rating: 8.9,
    popularity: 78,
    img: "./assets/covers/06-the-sunken-bell.webp",
    tags: ["Adventure", "Exploration", "Single-player"],
    description:
      "Dive into a drowned city where a bell still rings beneath the waves. Follow its sound through streets the ocean has claimed.",
  },
  {
    title: "Frostline",
    rating: 8.4,
    popularity: 90,
    img: "./assets/covers/07-frostline.webp",
    tags: ["Survival", "Crafting", "Co-op"],
    description:
      "Seek shelter in a mountain fortress as winter closes every road behind you. Craft supplies, keep the fires burning, and prepare for the next storm.",
  },
  {
    title: "Orbital Bones",
    rating: 8.8,
    popularity: 83,
    img: "./assets/covers/08-orbital-bones.webp",
    tags: ["Strategy", "Base Building", "Multiplayer"],
    description:
      "Build an outpost among the remains of a forgotten space station. Compete for salvage and expand your foothold above an uncharted planet.",
  },
  {
    title: "Neon Requiem",
    rating: 8.5,
    popularity: 89,
    img: "./assets/covers/09-neon-requiem.webp",
    tags: ["Adventure", "Story Rich", "Single-player"],
    description:
      "Trace a missing person's last footsteps through rain-soaked neon streets. In a city that records everything, someone has learned how to disappear.",
  },
  {
    title: "Dust Circuit",
    rating: 8.2,
    popularity: 87,
    img: "./assets/covers/10-dust-circuit.webp",
    tags: ["Racing", "Open World", "Multiplayer"],
    description:
      "Race battered machines across desert highways and canyon trails. Learn every shortcut, risk the next jump, and leave your rivals in the dust.",
  },
  {
    title: "Moss & Moon",
    rating: 8.6,
    popularity: 76,
    img: "./assets/covers/11-moss-and-moon.webp",
    tags: ["Adventure", "Puzzle", "Single-player"],
    description:
      "Follow a trail of tiny lights into a forest waking under the moon. Solve woodland puzzles and help its peculiar inhabitants find their way home.",
  },
  {
    title: "Blackwater Harbor",
    rating: 8.3,
    popularity: 72,
    img: "./assets/covers/12-blackwater-harbor.webp",
    tags: ["Adventure", "Story Rich", "Multiplayer"],
    description:
      "Return to a harbor where an empty ship arrives with the evening fog. Search its decks for clues before the tide carries it away.",
  },
  {
    title: "Cinder Vault",
    rating: 8.7,
    popularity: 91,
    img: "./assets/covers/13-cinder-vault.webp",
    tags: ["Action", "Exploration", "Co-op"],
    description:
      "Descend into a vault buried beneath a ruined city. Fight your way past its guardians and uncover what they were built to protect.",
  },
  {
    title: "The Last Orchard",
    rating: 8.4,
    popularity: 74,
    img: "./assets/covers/14-the-last-orchard.webp",
    tags: ["Simulation", "Crafting", "Single-player"],
    description:
      "Restore an abandoned orchard with salvaged tools and handmade equipment. Share your harvest with passing strangers and give them a reason to stay.",
  },
  {
    title: "Void Courier",
    rating: 8.1,
    popularity: 69,
    img: "./assets/covers/15-void-courier.webp",
    tags: ["Adventure", "Exploration", "Single-player"],
    description:
      "Carry a mysterious parcel to a colony beyond the mapped stars. Choose your route carefully, because the quietest signals may matter most.",
  },
  {
    title: "Thorn Crown",
    rating: 9.2,
    popularity: 86,
    img: "./assets/covers/16-thorn-crown.webp",
    tags: ["RPG", "Story Rich", "Single-player"],
    description:
      "Enter a forest that has grown through the throne of a lost king. Unravel his last promise before you choose who inherits the crown.",
  },
];

const randomTags = [...new Set(gamesLibrary.flatMap((game) => game.tags))];

const cardsList = document.getElementById("cardsList");
const randomOptions = document.getElementById("search-recommendations");

function renderPage() {
  cardsList.replaceChildren();
  gamesLibrary.forEach((e) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img
              class="card-image"
              src="${e.img}"
            />
              <div class="card-info">
                <div class="card-title">
                  <h2>${e.title}</h2>
                  <div class="card-rating">
                    <img class="card-rating-icon" src="./assets/icons/ui/rating.svg"/>
                    <span class="card-rating-num">${e.rating}</span>
                  </div>
                </div>
                <ul class="card-tags">
                  <li class="card-tag">${e.tags[0]}</li>
                  <li class="card-tag">${e.tags[1]}</li>
                  <li class="card-tag">${e.tags[2]}</li>
                </ul>
                <p class="card-description">${e.description}</p>
            </div>`;
    cardsList.append(card);
  });

  function randomNumbers() {
    const numbers = new Set();
    const count = Math.min(5, randomTags.length);
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * randomTags.length));
    }
    return [...numbers];
  }

  function renderRandomTags() {
    let numbers = randomNumbers();
    let text = ``;

    for (let i = 0; i < numbers.length; i++) {
      text += `<li class="search-option"><button>${randomTags[numbers[i]]}</button></li>`;
    }
    randomOptions.innerHTML = text;
  }
  renderRandomTags();
}
renderPage();
