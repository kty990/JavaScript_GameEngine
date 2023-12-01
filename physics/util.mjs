class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Point} point 
     * @returns 
     */
    add(point) {
        return new Point(point.x + this.x, point.y + this.y);
    }

    sub(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }
}

class Vector2i {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.xa = 0;
        this.ya = 0;
    }

    acceleration(xa = 0, ya = 0) {
        this.xa = xa;
        this.ya = ya;
    }
}

class Color {
    constructor(r, g, b, a = 1) {
        this.r, this.g, this.b, this.alpha = r, g, b, a;
    }
}

class HexColor extends Color {
    constructor(hex) {
        super(Object.values(hexToRgba(hex)));
    }
}


async function loadPixelsFromImg(url) {
    return new Promise(async (resolve, reject) => {
        await fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const img = new Image();
                img.onload = function () {
                    resolve(loadPixelsFromImage(img));
                };
                img.onerror = reject;
                img.src = URL.createObjectURL(blob);
            });
    })
}

function loadPixelsFromImage(img) {
    // Create a canvas element
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    // Get the 2D context of the canvas
    let ctx = canvas.getContext('2d');

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Get the pixel data for the entire image
    let pixelData = ctx.getImageData(0, 0, img.width, img.height).data;

    return pixelData;
}

function hexToRgba(hex, alpha = 1) {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, '');

    // Parse the hex value into individual RGB components
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    // Validate and clamp the alpha value between 0 and 1
    alpha = Math.min(1, Math.max(0, alpha));

    // Return the RGBA values as an object
    return { r, g, b, a: alpha };
}

function assert(bool, msg) {
    if (!bool) throw msg;
}

/**
 * Convert a 1-D array of pixel data into a 2-D array
 */
function toPixelArray(width, height, arr) {
    let tmp = [];
    let cArr = [];
    let x = 0;
    for (let pxl of arr) {
        x++;
        cArr.push(pxl);
        if (x == width) {
            tmp.push(cArr);
            cArr = [];
        }
    }
    if (cArr.length > 0) {
        tmp.push(cArr);
        cArr = [];
    }
    return tmp;
}

export { Point, Vector2i, Color, HexColor, assert, loadPixelsFromImg, hexToRgba, toPixelArray }