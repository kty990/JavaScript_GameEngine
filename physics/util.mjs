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
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = a;

    }

    deconstruct() {
        return [this.r, this.g, this.b, this.alpha];
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
                    const justify = (r) => {
                        let fixed_arr = [];
                        for (let i = 0; i < r.length; i += 4) {
                            fixed_arr.push(new Color((r[i]), (r[i + 1]), (r[i + 2]), (r[i + 3])));
                        }
                        return fixed_arr;
                    }
                    resolve(justify(loadPixelsFromImage(img)));
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

function generateLightArray(radiusDegrees, height, direction) {
    if (radiusDegrees < 0 || radiusDegrees > 360) {
        console.log("Invalid radius value. Please enter a value between 0 and 360.");
        return null;
    }

    const lightArray = [];

    const coneHeight = height;
    const radius = Math.tan((radiusDegrees / 2) * (Math.PI / 180));

    for (let y = 0; y < coneHeight; y++) {
        const row = [];
        const lineWidth = Math.floor(y / coneHeight * radius * 2);

        for (let x = 0; x < lineWidth; x++) {
            // Normalize the light level between 0 and 1 based on x position in the row
            const lightLevel = x / lineWidth;

            // Adjust x position based on the direction
            const adjustedX = adjustXPosition(x, lineWidth, direction);

            row.push(lightLevel);
        }

        lightArray.push(row);
    }

    return lightArray;
}

// Function to adjust x position based on the direction
function adjustXPosition(x, lineWidth, direction) {
    // Calculate the adjusted x position based on the direction
    const adjustedX = x - lineWidth / 2;
    const angle = (direction + 90) * (Math.PI / 180); // Convert to radians and adjust for 0/360 being top

    // Rotate the adjusted x position based on the direction
    const rotatedX = adjustedX * Math.cos(angle);

    // Shift the x position back to the original center
    const finalX = rotatedX + lineWidth / 2;

    return finalX;
}


function applyLightArrays(pixels, xArray, yArray, lightArrays) {
    assert(!Array.isArray(xArray) ||
        !Array.isArray(yArray) ||
        !Array.isArray(lightArrays) ||
        xArray.length !== yArray.length ||
        xArray.length !== lightArrays.length ||
        lightArrays.length === 0,
        "Invalid input arrays");

    const maxY = pixels.length;
    const maxX = maxY > 0 ? pixels[0].length : 0;

    for (let i = 0; i < xArray.length; i++) {
        const x = Math.floor(xArray[i]);
        const y = Math.floor(yArray[i]);

        if (x >= 0 && x < maxX && y >= 0 && y < maxY) {
            const lightArray = lightArrays[i];
            const row = pixels[y];

            for (let j = 0; j < lightArray.length; j++) {
                const lightLevel = lightArray[j];
                const pixelX = x - Math.floor(lightArray.length / 2) + j;

                if (pixelX >= 0 && pixelX < maxX) {
                    //row[pixelX] += lightLevel;
                    //row[pixelX] = Math.min(1, Math.max(0, row[pixelX]));

                    row[pixelX] *= lightLevel * 100;
                    row[pixelX] = Math.min(1, Math.max(0, row[pixelX]));
                }
            }
        }
    }
}


export { Point, Vector2i, Color, HexColor, assert, loadPixelsFromImg, hexToRgba, toPixelArray, drawCone, generateLightArray, applyLightArrays }