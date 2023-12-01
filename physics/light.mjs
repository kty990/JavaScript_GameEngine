import * as util from './util';

class LightSource {

    /**
     * 
     * @param {GameMap} map 
     */
    constructor(map, x = 0, y = 0) {
        this.map = map;
        this.defaultPixels = map.pixels;
        this.emit = true;
        this.radius = 5; // degrees
        this.distance = 0;
        this.ignoreSolids = false;
        this.intensity = 100; // percentage
        this.color = new util.HexColor('#cccccccc');
        this.position = new util.Vector2i(x, y, 0, 0);
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

    generateMap(x, y, zoom = 1) {
        let tmp = this.map.pixels;
        let lights = this.getLightsInRadiusOfPos()
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