const board = document.getElementById("pixel-board");

for (let i = 0; i < 32 * 32; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  
  pixel.addEventListener("click", () => {
    // 현재 색상이 검정이면 흰색으로, 아니면 검정으로
    if (pixel.style.backgroundColor === "black") {
      pixel.style.backgroundColor = "white";
    } else {
      pixel.style.backgroundColor = "black";a
    }
  });

  board.appendChild(pixel);
}
