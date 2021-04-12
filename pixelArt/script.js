const pixelIdentification = 'pixel-board';

function createPaletteContainer(num) {
  for (let index = 0; index < num; index += 1) {
    const palettesBox = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettesBox);
    palettesBox.className = 'color';
  }
}
createPaletteContainer(4);

function giveCollorPalettesBox() {
  const paletteColor = document.getElementsByClassName('color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = 'red';
  paletteColor[2].style.backgroundColor = 'yellow';
  paletteColor[3].style.backgroundColor = 'pink';
  paletteColor[0].classList.add('selected');
}
giveCollorPalettesBox();

function createPixels(size) {
  const pixelBox = document.getElementById(pixelIdentification);
  for (let index = 0; index < size; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBox.appendChild(pixelColumn);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelLine = document.createElement('div');
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}
createPixels(5);

function clickPalette() {
  const eventPalette = document.getElementById('color-palette');
  eventPalette.addEventListener('click', (e) => {
    const eventTarget = e.target;
    console.log(eventTarget);
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
}
clickPalette();

function paintPixels() {
  const board = document.getElementById(pixelIdentification);
  board.addEventListener('click', (e) => {
    const eventTarget = e.target;
    const multipleTarget = document.querySelector('.selected');
    if (eventTarget.className === 'pixel') {
      eventTarget.style.backgroundColor = multipleTarget.style.backgroundColor;
    }
  });
}
paintPixels();

function choiceSizeOfPixelBox() {
  const input = document.getElementById('board-size');
  const rstBtn = document.getElementById('generate-board');
  rstBtn.addEventListener('click', () => {
    const pixelBoard = document.getElementById(pixelIdentification);
    if (input.value === '') {
      alert('Board Inválido!');
    } else if (input.value < 5) {
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    }
    pixelBoard.innerHTML = '';
    createPixels(input.value);
  });
}
choiceSizeOfPixelBox();

function resetColorsButton() {
  const resetButton = document.createElement('button');
  const interfaceHtml = document.getElementById('userPainel');
  interfaceHtml.appendChild(resetButton);
  resetButton.innerHTML = 'Limpar';
  resetButton.id = 'clear-board';
  resetButton.addEventListener('click', () => {
    const color = document.getElementsByClassName('pixel');
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = 'white';
    }
  });
}
resetColorsButton();

function randomColor() {
  const paletteColor = document.getElementsByClassName('color');
  for (let index = 1; index < paletteColor.length; index += 1) {
    const r = parseInt(Math.random() * 255, 10);
    const g = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 10);
    paletteColor[index].style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
  }
}
randomColor();
