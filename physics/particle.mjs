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
        this.speed = 0.5; 
    }

    /**
     * 
     * @param {util.Vector2i} pos0 
     * @param {util.Vector2i} pos1  
     * @param {number} speed Between 0 - 1 
     */
    tween(pos0, pos1, speed) {
        let m = (pos0.y / pos1.y) / (pos0.x / pos1.x);
        let d = speed;
        // Calculate new coordinates
        const newX = x + d / Math.sqrt(1 + m * m);
        const newY = y + m * (d / Math.sqrt(1 + m * m));

        // Now, (newX, newY) represents the point moved along the slope by distance 'd'

        return new util.Vector2i(newX,newY); // finish this
    }

    update() {
        if (this.path) {
            // Update position along the path
            if (this.i >= this.path.length) {
                return;
            }
            let pos = this.tween(this.path[this.i],this.path[this.i+1],this.speed);
            
            this.position = pos;
            if (pos.gt(this.path[i+1]) {
                this.i++;
            }
        }
    }

    render() {
        this.game.pixels[this.position.y][this.position.x] = this.color;
    }
}

export { Particle }