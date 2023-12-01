import * as util from './util';
import * as entity from './entity';

class LightSource {

    /**
     * 
     * @param {GameMap} map 
     */
    constructor(map, x = 0, y = 0) {
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
    }

    /**
     * 
     * @param {_2DArray<number>} lightmap 
     */
    modifyMap(lightmap) {
        if (!this.emit) return;
        if (this.ignoreSolids) {

        } else {

        }
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
        let light = new LightSource(this.map, x, y);
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