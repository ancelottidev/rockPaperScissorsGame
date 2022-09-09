const playBtn = document.querySelector('.intro button');
const introScreen = document.querySelector('.intro');
const match = document.querySelector('.match');

let pScore = 0;
let cScore = 0;


playBtn.addEventListener('click', () => {
    introScreen.classList.add('unactive');
    match.classList.add('active');
});