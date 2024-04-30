const second = document.querySelector(".sec");
const head = document.querySelector("h1")


let sec = 0;
let intervel = null;
function timer(){
    sec ++;
    let hours = Math.floor(sec / 3600);
    let mints = Math.floor((sec - (hours * 3600))/ 60);
    let secs = sec % 60;

    if(secs  < 10) secs = '0' + secs;
    if(mints < 10) mints = '0' + mints;
    if(hours < 10) hours = '0' + hours;

    
    head.innerHTML = `${hours}:${mints}:${secs}`

}

function startWatch(){
    if(intervel){
        return
    }
    intervel = setInterval(timer ,1000)

}

function stopWatch(){
    clearInterval(intervel)
    console.log("Stop button clicked"); 
    intervel = null;
}

function resetWatch(){
    stopWatch();
    sec = 0;
    head.innerHTML = "00:00:00"
}