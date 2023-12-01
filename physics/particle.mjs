import * as entity from './entity';

class Particle extends entity.Entity {

    /**
     * 
     * @param {string} color - hex color code
     */
    constructor(color = '') {
        super();
        this.solid = false;
        this.color = color;
    }

    render(GAME) {
        // GAME.pixels
    }
}