
const durationInput=document.querySelector('#duration')
const startButton=document.querySelector('#start')
const pauseButton=document.querySelector('#pause')
const circle = document.querySelector('circle')

parameter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray',parameter)

let duration;
const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(totalDuration){
        duration= totalDuration
    },
    onTick(timerRemaining){
        circle.setAttribute('stroke-dashoffset',parameter*timerRemaining/duration-parameter)
    },
    onComplete(){
        console.log('The timer is completed')
    }
})