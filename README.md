# Game Engine

## Physics

### Entity
- **Entity(Game: Main.Game, x: number?, y: number?, health: number?)**
     - Properties:
        - Entity.id: number
            - READ-ONLY
            - A static variable that increases as new entities are created.
        - position: Util.Vector2i
            - The position of the entity. Also stores the velocity of the entity.
        - visible: boolean
            - Whether or not the entity renders to the screen when within the bounds of the screen
        - health: number
            - Min: 0
            - Max: inf

            - Once the entity's health reaches or goes below 0, all event listeners added through Entity#onDeath are invoked.
        - rotation: number
            - The rotation to be applied when rendering the entity
        - solid: boolean
            - Whether this entity collides with other entities
        - speed: number
            - How fast the entity moves
        - id: number
            - READ-ONLY
            - An identification number used internally within the engine
        - pixels: Array<Array<Util.Color>> (2D Array of Util.Color instances)
            - READ-ONLY
        - width: number
            - READ-ONLY
        - height: number
            - READ-ONLY
        - game: Main.Game
            - READ-ONLY
    
    - Instance Methods:
        - setPixels(width: number, height: number, pixArr: Array<Color>)

        - setSprite(width: number, height: number, path: string)

        - destroy()

        - onDeath(c: function)

        - removeListener(c: function)

        - checkCollision(e: Entity)

        - applyVelocity(xa: number, ya: number, timelimit: number?)

        - moveTo(x: number, y: number)

        - update()

        - render()


### Light
- **LightSource(map: Main.GameMap, x: number?, y: number?, game: Main.Game)**
    - Properties:
        - map: Main.GameMap
        - emit: boolean
        - radius: number
        - direction: number
        - distance: number
        - ignoreSolids: boolean
        - intensity: number
        - color: Util.Color
        - position: Util.Vector2i
        - game: Main.Game
    - Methods:
        - getLightmap()

        - getSolidObstacles

- **Lighting(Game: Main.Game, map: Main.GameMap)**
    - Properties:
        - lights: Array<LightSource>
        - map: Main.GameMap
        - game: Main.Game
        - currentLightMap: Array<Array<number>> (2D Array of numbers)
    - Methods:
        - addLight(x: number, y: number, hexColor: Util.HexColor, alpha: number?)

        - generateMap(x: number, y: number)

        - getLight(x:number,y:number)

        - getLightsInRadiusOfPos(x: number, y: number, radius: number)

        - render()

### Main

### Particle

### Util


## User

### Controls