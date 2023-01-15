console.log("hello");

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  let initialX;
  let initialY;
  let currentX;
  let currentY;
  console.log(square.offsetLeft);

  square.addEventListener("mousedown", (e) => {
    initialX = e.clientX - square.offsetLeft;
    initialY = e.clientY - square.offsetTop;
    square.classList.add("dragging");
  });

  square.addEventListener("mousemove", (e) => {
    if (square.classList.contains("dragging")) {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      if (currentX < 0) {
        currentX = 0;
      }

      if (currentY < 0) {
        currentY = 0;
      }

      console.log(`currentX: ${currentX}, currentY: ${currentY}`);
      console.log(window.innerWidth);
      square.style.left = `${currentX}px`;
      square.style.top = `${currentY}px`;
    }
  });

  square.addEventListener("mouseup", (e) => {
    square.classList.remove("dragging");
  });
});
