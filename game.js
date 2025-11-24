let target = document.getElementById('target');
let resetBtn = document.getElementById('reset');


let score = 0;
let time = 0;
let timeUpdater = null;



target.addEventListener('click', () => {
    score += 1;
    document.getElementById('score').innerText = score;
    let random = Math.random() * 100;
    let randX = random > 15? random : 15;
    random = Math.random() * 100;
    let randY = random > 15? random : 15;
    target.style.left = `calc(${randX}% - 50px)`;
    target.style.top = `calc(${randY}% - 50px)`;

    if(score == 1) {
        let showTime = document.getElementById('timer');
        timerUpdater = setInterval(() => {
            time += 1;
            showTime.innerText = `${time}s`;
        }, 1000);
    }
});

resetBtn.addEventListener('click', () => {
    score = 0;
    time = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('timer').innerText = `${time}s`;
    target.style.left = `calc(50% - 25px)`;
    target.style.top = `calc(50% - 25px)`;
    clearInterval(timerUpdater);
});

console.log(randX);