const emojis = ['😺', '🐶', '🐵', '🐸', '🦁', '🐼', '🐷', '🐮'];
let emojiList = [...emojis, ...emojis];
let revealedCards = [];
let lock = false;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCard(emoji, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;
  card.dataset.index = index;

  card.addEventListener("click", () => {
    if (lock || card.classList.contains("revealed")) return;

    card.textContent = emoji;
    card.classList.add("revealed");
    revealedCards.push(card);

    if (revealedCards.length === 2) {
      lock = true;
      setTimeout(() => {
        const [card1, card2] = revealedCards;
        if (card1.dataset.emoji !== card2.dataset.emoji) {
          card1.textContent = "";
          card2.textContent = "";
          card1.classList.remove("revealed");
          card2.classList.remove("revealed");
        }
        revealedCards = [];
        lock = false;
      }, 800);
    }
  });

  return card;
}

function resetGame() {
  const board = document.getElementById("gameBoard");
  board.innerHTML = "";
  revealedCards = [];
  lock = false;

  emojiList = shuffle([...emojis, ...emojis]);
  emojiList.forEach((emoji, index) => {
    const card = createCard(emoji, index);
    board.appendChild(card);
  });
}

resetGame();
