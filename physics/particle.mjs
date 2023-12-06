import * as entity from './entity';
import * as util from './util';

class Particle extends entity.Entity {

    /**
     * 
     * @param {string} color - hex color code
     */
    constructor(GAME, color = new util.HexColor("#ffffff")) {
        super(GAME);
        this.solid = false;
        this.color = color;
        this.path = null;
    }

    /**
     * 
     * @param {util.Vector2i} pos0 
     * @param {util.Vector2i} pos1 
     * @param {util.Vector2i} lastPos 
     * @param {number} speed Between 0 - 1 
     */
    tween(pos0, pos1, lastPos, speed) {
        let slope = (pos0.y / pos1.y) / (pos0.x / pos1.x);
        return new util.Vector2i(); // finish this
    }

    update() {
        if (this.path) {
            // Update position along the path
            this.position
        }
    }

    render() {
        this.game.pixels[this.position.y][this.position.x] = this.color;
    }
}

export { Particle }