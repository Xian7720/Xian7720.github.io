const board = document.getElementById("pixel-board");
const gridSize = 32;
const totalPixels = gridSize * gridSize;
const storageKey = "pixel-art-data";

// 저장된 데이터 불러오기 (없으면 빈 배열 생성)
let savedData = JSON.parse(localStorage.getItem(storageKey)) || Array(totalPixels).fill("white");

// 픽셀 생성
for (let i = 0; i < totalPixels; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.backgroundColor = savedData[i]; // 저장된 색 불러오기

  pixel.addEventListener("click", () => {
    // 색 토글
    const newColor = pixel.style.backgroundColor === "black" ? "white" : "black";
    pixel.style.backgroundColor = newColor;

    // 데이터 저장
    savedData[i] = newColor;
    localStorage.setItem(storageKey, JSON.stringify(savedData));
  });

  board.appendChild(pixel);
}
