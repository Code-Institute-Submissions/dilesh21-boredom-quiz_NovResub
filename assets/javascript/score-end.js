const username  = document.querySelector('#username');
const saveScoreButton  = document.querySelector('#saveScoreButton');
const totalScore  = document.querySelector('#totalScore');
const mostRecentScore  = localStorage.getItem('mostRecentScore');

const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

const maxScores = 10;

totalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
})

saveScore = s => {
    s.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score);

    highScore.sort((a,b) => {
        return b.score - a.score
    })
    /*Return top 10 scores*/
    highScore.splice(10);

    localStorage.setItem('highScore', JSON.stringify(highScore));
    return window.location.assign('index.html');
    
}
