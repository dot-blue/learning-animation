const cards = document.querySelectorAll(".card");
let initialX;
let currentX;
let currentCard;

cards.forEach((card) => {
  card.addEventListener("mousedown", (e) => {
    initialX = e.clientX;
    currentCard = e.target;
    card.classList.add("dragging");
  });

  card.addEventListener("mousemove", (e) => {
    if (card.classList.contains("dragging")) {
      currentX = e.clientX;
      card.style.left = `${currentX - initialX}px`;
    }
  });

  card.addEventListener("mouseup", (e) => {
    if (currentX - initialX < -50) {
      currentCard.style.left = "-100%";
      currentCard.style.transition = "left 0.5s ease-out";
      currentCard.style.zIndex = "1";
      let currentCardIndex = Array.from(cards).indexOf(currentCard);
      if (currentCardIndex === 0) {
        currentCardIndex = cards.length;
      }
      cards[currentCardIndex - 1].style.zIndex = "3";
    } else {
      currentCard.style.left = "0";
    }
    currentCard.classList.remove("dragging");
  });
});
