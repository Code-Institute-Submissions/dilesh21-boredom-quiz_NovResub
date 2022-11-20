const scoreList = document.querySelector('#scoreList');
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

scoreList.innerHTML = highScore.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

function lightMode() {
    var elementBody = document.body;
    var elementHeading = document.querySelector('#totalScore');
    var elementBtn2 = document.querySelector('#btn2');
    var elementBtn3 = document.querySelector('#btnHome');

    elementBody.classList.toggle("light-mode");
    elementHeading.classList.toggle("light-h1");
    elementBtn2.classList.toggle("light-btn");
    elementBtn3.classList.toggle("light-btn");

    
  }
