const balls = document.querySelectorAll('.ball');
const correctColor = document.querySelector('#rgb-color');
const ballContainer = document.querySelector('#ball-container');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const scoreText = document.querySelector('#score');
const resetScore = document.querySelector('#reset-score');
let score = 0;

const randomRgbColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const ballColorGenerator = () => {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomRgbColor();
  }
};
ballColorGenerator();

function randomTextColor() {
  const randomColor = Math.round(Math.random() * 5);
  correctColor.innerText = balls[randomColor].style.backgroundColor;
}
randomTextColor();

ballContainer.addEventListener('click', (event) => {
  const ballSelected = event.target;
  if (ballSelected.style.backgroundColor !== correctColor.innerText) {
    answer.innerText = 'Errou! Tente novamente!';
  } else if (ballSelected.style.backgroundColor === correctColor.innerText) {
    answer.innerText = 'Acertou!';
    score += 3;
  }
  scoreText.innerText = score;
  ballColorGenerator();
  randomTextColor();
});

resetButton.addEventListener('click', () => {
  answer.innerText = 'Escolha uma cor';
  ballColorGenerator();
  randomTextColor();
});

resetScore.addEventListener('click', () => {
  scoreText.innerText = 0;
});
