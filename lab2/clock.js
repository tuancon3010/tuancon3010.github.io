class Clock {
    constructor(selector) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.el = document.querySelector(selector);
        this.render();
    }

    render() {
        this.el.textContent = `${String(this.hour).padStart(2, "0")}:${String(
            this.minute
        ).padStart(2, "0")}:${String(this.second).padStart(2, "0")}`;
    }

    start() {
        this.timer = setInterval(() => {
            this.second++;
            this.render();
        }, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    reset() {
        this.timer && clearInterval(this.timer);
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.render();
    }
}

let clock = new Clock(".clock");
