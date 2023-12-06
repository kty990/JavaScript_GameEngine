/**
* Incorrect terminology used. Acceleration is really
* velocity.
*/


import * as light from './light';
import * as particle from './particle';
import * as entity from './entity';
import { assert, Vector2i, loadPixelsFromImg, toPixelArray } from './util'
import * as controls from '../user/controls';

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
        this.cameraPosition = new util.Vector2i(0, 0);

        this.init();
    }

    async init() {
        let x = 0;
        setInterval(() => {
            x++;
            if (x % 3 == 0) {
                this.render();
            }
            this.update();
            if (x > 999) {
                x = 0;
            }
        }, 100);
    }

    /**
     * 
     * @param {GameMap} map 
     */
    setMap(map) {
        this.map = map;
    }

    update() {
        this.entities.forEach(e => e.update());
        this.cameraPosition.x += this.cameraPosition.xa;
        this.cameraPosition.y += this.cameraPosition.ya;
        this.cameraPosition.min(0, 0);
        this.pixels = util.applyLightArrays(this.pixels, this.map.lighting.map(L => L.position.x), this.map.lighting.map(L => L.position.y), this.map.lighting.generateMap(this.cameraPosition.x, this.cameraPosition.y))
    }

    /**
     * Wipes the screen and renders all entities to the screen
     */
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entities.forEach(e => e.render());
        if (this.map) {
            this.map.render(this);
        }
        this.ctx.putImageData(this.pixels.map(color => color.deconstruct()), 0, 0);
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
     * @param {Array<string> | undefined} MapBoundaryFilepath 
     * @param {string | undefined} filepath 
     * @param {Array | undefined} pixels 
     * 
     * The map boundary is a true/false for whether there are pixels in a given location.
     */
    constructor(GAME, dx = 0, dy = 0, MapBoundaryFilepaths = [], filepath = "", pixels = []) {
        assert(!(filepath == "" && pixels == []), `GameMap requires either a filepath or pixel array. No map data provided`);
        assert(MapBoundaryFilepaths instanceof Array && MapBoundaryFilepaths.length > 0, 'Requires map boundary file(s).');
        if (filepath) {
            this.filepath = filepath;
            this.dx = dx;
            this.dy = dy;

            this.pixels = toPixelArray(loadPixelsFromImg(filepath));

        }
        this.game = GAME;
        this.boundary = toPixelArray(loadPixelsFromImg(MapBoundaryFilepath));
        if (pixels instanceof Array) {
            if (pixels.length > 0) {
                this.pixels = toPixelArray(pixels);
            }
        }
        this.lighting = new light.Lighting(this);
        this.zoom = 1;
        this.game.canvas.width = `${1920 * this.zoom}px`;
        this.game.canvas.height = `${1080 * this.zoom}px`;
    }

    update() {
        this.game.canvas.width = `${1920 * this.zoom}px`;
        this.game.canvas.height = `${1080 * this.zoom}px`;
    }

    render() {
        for (let y = 0; y < this.pixels.length; y++) {
            for (let x = 0; x < this.pixels[0].length; x++) {
                this.game.pixels[y + this.dy][x + this.dx] = this.pixels[y + this.dy][x] + this.dx;
            }
        }
    }
}

class Player extends entity.Entity {
    constructor(controlType = ControlTypes.Keyboard) {
        super();
        this.controlType = controlType;
        switch (this.controlType) {
            case ControlTypes.Keyboard:
                this.controller = new controls.Keyboard();
                break;
            case ControlTypes.Touch:
            case ControlTypes.Mouse:
                this.controller = new controls.Mouse();
                break;
            default:
                throw 'Invalid control type.\n\tValid types:\n\t\t- Keyboard\n\t\tTouch\t(Mouse)';
        }
    }
}

export { Game, GameMap, Player, controls, entity, particle, light, MoveTypes, ControlTypes };