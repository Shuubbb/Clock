const secondsHand = document.querySelector('#seconds-hand');
const minutesHand = document.querySelector('#minutes-hand');
const hoursHand = document.querySelector('#hours-hand');
const center = document.querySelector('#center');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    // console.log(seconds)

    const timeInterval = 6;
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds /10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes/2) + 'deg)'
}

// getTime()
setInterval(getTime, 100)