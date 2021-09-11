score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(() => {
    audio.play()
}, 100);

document.onkeydown = function (e) {
    console.log('key code is: ', e.keyCode)
    if (e.keyCode == 38) {
        girl = document.querySelector('.girl');
        girl.classList.add('animategirl');
        setTimeout(() => {
            girl.classList.remove('animategirl')
        }, 700);
    }

    if (e.keyCode == 39) {
        girl = document.querySelector('.girl');
        girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        girl.style.left = girlX + 112 + 'px';
    }

    if (e.keyCode == 37) {
        girl = document.querySelector('.girl');
        girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        girl.style.left = (girlX - 112) + 'px';
    }
}

setInterval(() => {
    girl = document.querySelector('.girl');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    gx = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
    gy = parseInt(window.getComputedStyle(girl, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(gx - ox);
    offsetY = Math.abs(gy - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 110 && cross) {
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        // setTimeout(() => {
        //     anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //     newdur = anidur - 0.1;
        //     obstacle.style.animationduration = newdur + "s";
        //     console.log('new animation duration: ', newdur)
        // }, 500);

    }
}, 10);

function updatescore(score) {
    scorecont.innerHtml = "your score: " + score 
}