export default class CountdownTimer {
    constructor(obj) {
        this.targetDate = obj.targetDate.getTime()
        this.selector = document.querySelector(obj.selector);
    }

    update() {
        //  init
        const now = new Date().getTime()
        const time = this.targetDate - now


        //count
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);


        //update
        this.selector.innerHTML = `<div class="field">
            <span class="value" data-value="days">${days}</span>
            <span class="label">Days</span>
            </div>
            
            <div class="field">
                <span class="value" data-value="hours">${hours}</span>
                <span class="label">Hours</span>
            </div>
            
            <div class="field">
                <span class="value" data-value="mins">${mins}</span>
                <span class="label">Mins</span>
            </div>
            
            <div class="field">
                <span class="value" data-value="secs">${secs}</span>
                <span class="label">Secs</span>
            </div>`
     }

     expired(timerId) {
        clearInterval(timerId)
        this.selector.innerHTML = "timer expired"
     }


}
