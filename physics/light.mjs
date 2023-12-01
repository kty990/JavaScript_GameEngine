import * as util from './util';
import * as entity from './entity';

class LightSource {

    /**
     * 
     * @param {GameMap} map 
     */
    constructor(map, x = 0, y = 0, game) {
        this.map = map;
        this.emit = true;
        this.radius = 5; // degrees
        this.direction = 90; // up (deg)
        this.distance = 0;
        this.ignoreSolids = false;
        this.intensity = 100; // percentage
        this.color = new util.HexColor('#cccccccc');
        this.position = new util.Vector2i(x, y, 0, 0);
        this.drawEntity = new entity.Entity();
        this.drawEntity.solid = false;
        this.drawEntity.visible = false;
        this.game = game;
    }


    getLightmap() {
        if (!this.emit) return;
        let map, solidPixels;
        if (this.ignoreSolids) {
            map = util.generateLightArray(this.radius, this.height, this.direction);
        } else {
            solidPixels = this.getSolidObstacles();
            map = util.generateLightArray(this.radius, this.height, this.direction);
        }
        return { lightmap: map, points: solidPixels, solids: this.ignoreSolids };
    }

    getSolidObstacles() {
        let entities = this.game.entities.filter(e => e.solid == true && e.distanceTo(this.position) <= this.distance);
        let shadow = [];
        let xClamp = Math.min(Math.max(this.position.x, 0), POSITION);
        let yClamp = Math.min(Math.max(this.position.y, 0), POSITION);
        for (let x = xClamp; x < xClamp + distance; x++) {
            for (let y = yClamp; y < yClamp + distance; y++) {
                if (this.map.boundary[y][x].alpha != 0) {
                    shadow.push(new util.Point(x, y));
                }
            }
        }
        for (let e of entities) {
            shadow.push(new util.Point(e.position.x, e.position.y));
        }
        return shadow;
    }
}

class Lighting {
    constructor(GAME, map) {
        this.lights = [];
        this.map = map;
        this.game = GAME;
    }

    // Function to add a light to the dictionary
    addLight(x, y, hexColor, alpha = 1) {
        let rgbaColor = hexToRgba(hexColor, alpha);
        let light = new LightSource(this.map, x, y, this.game);
        light.color = rgbaColor;
        this.lights.push(light);
    }

    generateMap(x, y) {
        let tmp = [];
        for (let y = 0; y < this.game.canvas.height; y++) {
            let t = [];
            for (let x = 0; x < this.game.canvas.width; x++) {
                t.push(0);
            }
            tmp.push(t);
        }
        let lights = this.getLightsInRadiusOfPos(x, y, this.game.canvas.width * this.game.zoom);
        lights.forEach((light, i, arr) => {
            light.modifyMap(tmp);
        })
    }

    // Function to get the light at a specific coordinate
    getLight(x, y) {
        return this.lights.filter(L => L.x == x && L.y == y);
    }

    getLightsInRadiusOfPos(x, y, radius) {
        return this.lights.filter(L => Math.abs(L.x - x) <= radius && Math.abs(L.y - y) <= radius);
    }

    render() {

    }
}

export { LightSource, Lighting }