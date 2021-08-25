let clock = document.querySelector('.clock');

class Clock {
    constructor(clock) {
        this.elem = clock;
    };
    render() {
        let data = new Date();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        let seconds = data.getSeconds();
        this.elem.innerHTML = `${hours}:${minutes}:${seconds}`;
    };
    interval() {
        return setInterval(() => this.render(), 250);
    };
};

class FullFormat extends Clock {
    constructor() {
        super(clock)
    };
};

class ShortFormat extends Clock {
    constructor() {
        super(clock)
    };
    render() {
        let data = new Date();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        this.elem.innerHTML = `${hours}:${minutes}`;
    };
};

let time = new Clock(clock);
let fullTime = new FullFormat();
let shortTime = new ShortFormat();
let isFullFormat = true;
let fullInterval;
let shortInterval;
let mainTime = time.interval();


function toggleFormat() {

    return isFullFormat = !isFullFormat;
    
};

clock.addEventListener('click', () => {

    if (toggleFormat()) {
        clearInterval(mainTime);
        clearInterval(shortInterval);
        fullInterval = fullTime.interval();
    } else {
        clearInterval(mainTime);
        clearInterval(fullInterval);
        shortInterval = shortTime.interval();
    }

});

