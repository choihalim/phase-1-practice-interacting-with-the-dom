let start = 0;
let time = document.getElementById("counter");
let isPaused = false;

document.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(incrementTimer, 1000);
    decrement();
    increment();
    pause(timer);
});

function incrementTimer() {
    time.innerText = start;
    start += 1;
}

function decrement() {
    let minus = document.getElementById("minus");
    minus.addEventListener("click", ()=> {
        let decrease = Number(time.innerText) - 1;
        time.innerText = decrease;
    });
}

function increment() {
    let plus = document.getElementById("plus");
    plus.addEventListener("click", ()=> {
        let increase = Number(time.innerText) + 1;
        time.innerText = increase;
    });
}

function pause(timer) {
    let pause = document.getElementById("pause");
    pause.addEventListener("click", ()=>{
        isPaused = !isPaused;
        if(isPaused = true) {
            clearInterval(timer);
        } else {
            setInterval(incrementTimer, 1000);
        }     
    })
}