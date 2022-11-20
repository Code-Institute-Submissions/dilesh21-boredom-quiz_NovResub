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
    window.location.assign('/');
};

function lightMode() {
    var elementBody = document.body;
    var elementH1 = document.querySelector('#totalScore');
    var elementH2 = document.querySelector('#end-head-2');
    var elementBtn1 = document.querySelector('#saveScoreButton');
    var elementBtn2 = document.querySelector('#btnTa');
    var elementBtn3 = document.querySelector('#btnBh');
    var elementBtn4 = document.querySelector('#btn2');
    var elementIn = document.querySelector('#username');
 
    elementBody.classList.toggle("light-mode");
    elementH1.classList.toggle("light-h1");
    elementH2.classList.toggle("light-h2");
   elementBtn1.classList.toggle("light-btn");
   elementBtn2.classList.toggle("light-btn");
   elementBtn3.classList.toggle("light-btn");
   elementBtn4.classList.toggle("light-btn");
   elementIn.classList.toggle("inputFi-light");

};
