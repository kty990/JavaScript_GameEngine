import * as util from '../physics/util';

class Keyboard {
    constructor() {
        this.press = {};
        this.release = {};
        this.enabled = true;

        document.addEventListener('keydown', function (event) {
            if (!this.enabled) return;
            try {
                this.press[event.key.toUpperCase()].forEach(cb => cb(event));
            } catch (e) { }
        });

        document.addEventListener('keyup', function (event) {
            if (!this.enabled) return;
            try {
                this.release[event.key.toUpperCase()].forEach(cb => cb(event));
            } catch (e) { }
        });
    }

    onpress(btn, callback) {
        if (!Array.from(Object.keys(this.press)).includes(btn.toUpperCase())) {
            this.press[btn.toUpperCase()] = [];
        }
        this.press[btn.toUpperCase()].push(callback);
    }

    onrelease(btn, callback) {
        if (!Array.from(Object.keys(this.release)).includes(btn.toUpperCase())) {
            this.release[btn.toUpperCase()] = [];
        }
        this.release[btn.toUpperCase()].push(callback);
    }
}

class Mouse {
    constructor() {
        this.position = new util.Point(0, 0);
        this.enabled = true;
        this.Ldown = false;
        this.Rdown = false;

        this.ondown = [];
        this.onup = [];
        this.onmove = [];
        this.onright = [];

        document.addEventListener("mousedown", (event) => {
            if (!this.enabled) return;
            this.ondown.forEach(cb => cb(event));
        })

        document.addEventListener("mousemove", (event) => {
            if (!this.enabled) return;
            this.onmove.forEach(cb => cb(event));
        })

        document.addEventListener("mouseup", (event) => {
            if (!this.enabled) return;
            this.onup.forEach(cb => cb(event));
        })

        document.addEventListener("contextmenu", (event) => {
            if (!this.enabled) return;
            event.preventDefault();
            this.onright.forEach(cb => cb(event));
        })
    }

    onpress(callback, btn = 'left') {
        if (btn == 'left') {
            this.ondown.push(callback);
        } else {
            this.onright.push(callback);
        }
    }

    onrelease(callback) {
        this.onup.push(callback);
    }

    ondrag(callback) {
        this.onmove.push(callback);
    }
}

class Gamepad {
    constructor() {
        throw 'Gamepad class not ready';
    }
}

export { Keyboard, Mouse, Gamepad }