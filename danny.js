setInterval(setClock, 1000)

const hourHand = document.querySelector("[dat-hour-hand]");
const minuteHand = document.querySelector("[dat-minute-hand]");
const secondHand = document.querySelector("[dat-second-hand]");
 console.log(hourHand)


function setClock() {
    const currentDate = new Date ()
    const secondsRatio =currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--ration', rotationRatio *360)
}

 setClock()