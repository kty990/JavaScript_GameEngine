import * as light from './light';
import * as particle from './particle';
import * as entity from './entity';
import { assert, Vector2i, loadPixelsFromImg, toPixelArray } from './util'

const ControlTypes = {
    Keyboard: 0,
    Gamepad: 1,
    Touch: 2
}

const MoveTypes = {
    Isometric: 0, // Map moves, player is centered
    IsoStick: 1, // Map moves, player is centered unless against map border
    Platformer: 2,
    Mouse: 3 // Moves based on mouse position
}

class Game {

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
        this.pixels = [];
        this.entities = [];
    }

    /**
     * 
     * @param {GameMap} map 
     */
    setMap(map) {
        this.map = map;
    }

    /**
     * Wipes the screen and renders all entities to the screen
     */
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entities.forEach(e => e.render(this));
        if (this.map) {
            this.map.render(this);
        }
        // SHOW
        this.ctx.putImageData(this.pixels, 0, 0);
    }

    addEntity(e) {
        this.entities.push(e);
    }

    removeEntity(e) {
        try { this.entities.splice(this.entities.indexOf(e), 1); } catch (e) { }
    }
}

class GameMap {

    /**
     * 
     * @param {number | undefined} dx 
     * @param {number | undefined} dy 
     * @param {string | undefined} MapBoundaryFilepath 
     * @param {string | undefined} filepath 
     * @param {Array | undefined} pixels 
     * 
     * The map boundary is a true/false for whether there are pixels in a given location.
     */
    constructor(dx = 0, dy = 0, MapBoundaryFilepath = "", filepath = "", pixels = []) {
        assert(filepath == "" && pixels == [], `GameMap requires either a filepath or pixel array. No map data provided`);
        assert(MapBoundaryFilepath instanceof string && MapBoundaryFilepath.length > 0, 'Requires map boundary file.');
        if (filepath) {
            this.filepath = filepath;
            this.dx = dx;
            this.dy = dy;

            this.pixels = toPixelArray(loadPixelsFromImg(filepath));

        }
        this.boundary = toPixelArray(loadPixelsFromImg(MapBoundaryFilepath));
        if (pixels instanceof Array) {
            if (pixels.length > 0) {
                this.pixels = toPixelArray(pixels);
            }
        }
        this.lighting = new light.Lighting(this);
    }

    render() {
        //
    }
}

class Player extends entity.Entity {
    constructor(controlType = ControlTypes.Keyboard) {
        super();
        this.controlType = controlType;
    }
}

export { Game, GameMap, Player, entity, particle, light, MoveTypes, ControlTypes };