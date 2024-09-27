// concept use event bubbleing 
// jispe click karoge wo element par event raise hoga, or event listerr na milne par wo uske paent pe check karega, wha bhi na milne par uske upper check karega;

var time = 30;
var score = 0;
var hitrn = 0;
//this is concept of event bubbling  
document.getElementById("pbtm").addEventListener('click',(dets)=>{
    // target is return current bubble number
  var clicknum =  parseInt(dets.target.textContent);
  if(clicknum==hitrn){
    increaseScore();
    Hit();
    makeBubble();
  }
})

function increaseScore() {
    score += 10;
    document.getElementById("scoreval").textContent = score;
}

function Hit() {
    hitrn = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 0; i <= 167; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`
    }
    document.getElementById("pbtm").innerHTML = clutter;
}

function timer() {
    var timeInt = setInterval(() => {
        if (time > 0) {
            time--;
            document.getElementById("timerval").textContent = time;
        } else {
            clearInterval(timeInt);
            if(score>100){
                document.getElementById("pbtm").innerHTML = "<h1> Congratulation...🎉<br> You win <h1>";
            }else{
            document.getElementById("pbtm").innerHTML = "<h1>Game Over<h1>";
            }
        }
    }, 1000);
}
timer();
//increaseScore();
Hit();
makeBubble();

