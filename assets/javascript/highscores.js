const scoreList = document.querySelector('#scoreList');
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

scoreList.innerHTML = highScore.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');
