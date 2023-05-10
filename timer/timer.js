class Timer{
    constructor(durationInput, startButton,pauseButton,callBacks){
        this.durationInput=durationInput;
        this.startButton= startButton;
        this.pauseButton=pauseButton
        if(callBacks){
            this.onStart=callBacks.onStart
            this.onTick=callBacks.onTick
            this.onComplete=callBacks.onComplete
        }
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click',this.pause)
    }

    start=()=>{
        if(this.onStart){
            this.onStart(this.timerRemaining)
        }
        this.tick()
        this.timerId= setInterval(this.tick,20)
    }
    pause= ()=>{
        clearInterval(this.timerId)
    }
    tick=()=>{
        if(this.timerRemaining <=0){
            this.pause()
            if(this.onComplete){
                this.onComplete()
            }
        }
        else{
            this.timerRemaining=this.timerRemaining-0.02
            if(this.onTick){
                this.onTick(this.timerRemaining)
            }
        }   
    }
    get timerRemaining(){
        return parseFloat(this.durationInput.value)
    }
    set timerRemaining(time){
        this.durationInput.value=time.toFixed(2)
       
    }
}




