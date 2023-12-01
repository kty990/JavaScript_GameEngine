import * as util from './util';

class Entity {
    id = 0;

    /**
     * @param {Game} GAME
     * @param {number} x 
     * @param {number} y 
     * @param {number} health 
     */
    constructor(GAME,x = 0, y = 0, health = 100) {
    this.position = new util.Vector2i(x, y, 0, 0);
    this.visible = true;
    this.health = health;
    this.rotation = 0;
    this.solid = true;
    this.speed = 0;
    this.id = id;
    this.pixels = [];
    this.width = 0;
    this.height = 0;
    this.game = GAME;
    this.game.addEntity(this);
}

/**
    * @param {Array} pixArr - Assumes 1-D array
    */
setPixels(width, height, pixArr) {
    this.pixels = util.toPixelArray(width, height, pixArr);
    this.width = width;
    this.height = height;
}

/**
    * @param {number} width
    * @param {number} height
    * @param {string} path - PNG image = better hit box
    */
setSprite(width, height, path) {
    let tmp = util.loadPixelsFromImg(path);
    this.pixels = util.toPixelArray(width, height, tmp);
    this.width = width;
    this.height = height;
}

destroy() {
    for (let c of entities[this.id]) {
        c();
    }
    entities[this.id] = undefined;
}

/**
     * 
     * @param {function} c 
     */
onDeath(c) {
    entities[this.id].push(c);
}

/**
     * 
     * @param {function} c 
     */
removeListener(c) {
    try {
        entities[this.id].splice(entities[this.id].indexOf(c), 1);
    } catch (_) { }
}

/**
    * @param {Entity} e
    */
checkCollision(e) {
    if (Math.abs(e.position.x - this.position.x) > width || Math.abs(e.position.y - this.position.y) > height) {
        return false;
    }

    function findOverlappingPixels(imageData1, image1X, image1Y, imageData2, image2X, image2Y) {
        // Find the dimensions of the overlapping region
        const startX = Math.max(image1X, image2X);
        const startY = Math.max(image1Y, image2Y);
        const endX = Math.min(image1X + imageData1[0].length, image2X + imageData2[0].length);
        const endY = Math.min(image1Y + imageData1.length, image2Y + imageData2.length);

        // Array to store overlapping pixel positions
        const overlappingPixels = [];

        // Iterate through the overlapping region
        for (let y = startY; y < endY; y++) {
            for (let x = startX; x < endX; x++) {
                // Check if both images have non-transparent pixels at the same position
                if (imageData1[y - image1Y][x - image1X] > 0 && imageData2[y - image2Y][x - image2X] > 0) {
                    overlappingPixels.push({ x, y });
                }
            }
        }
        return overlappingPixels;
    }

    let intersectEntity = findOverlappingPixels(this.pixels, this.position.x + this.position.xa, this.position.y + this.position.ya, e.pixels, e.position.x + e.position.xa, e.position.y + e.position.ya);
    // Check if intersecting map barrier
    let intersectMapBoundary = false; // Unfinished

    return intersectEntity || intersectMapBoundary;
}

/**
     * 
     * @param {number} xa 
     * @param {number} ya 
     * @param {number} timelimit | -1 = inifinity, ms
     */
applyAcceleration(v2i = new Vector2i(), timelimit = -1) {
    this.xa = v2i.xa;
    this.ya = v2i.ya;
    if (timelimit !== -1) {
        setTimeout(() => {
                   this.xa -= xa;
        this.ya -= ya;
    }, timelimit);
}
}

moveTo(x, y) {
    assert(x instanceof Number, 'X coordinate is a non-number value.');
    assert(y instanceof Number, 'Y coordinate is a non-number value.');
    this.position.set(x, y);
}

update() {

}

render() {
    if (!this.visible) return;
    for (let y = 0; y < this.pixels.length; y++) {
        for (let x = 0; x < this.pixels[0].length; x++) {
            if (this.pixels[y][x].alpha == 0) {
                continue;
            }
            this.game.pixels[y][x] = this.pixels[y][x];
        }
    }
}
}

export { Entity }