<head>
    <style>
        html,body {
            background-color: #12060a;
        }
        .class {
            color: #ffffff;
            background-color: #b59f64;
            border-radius: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: #000;
            margin: 0;
            padding: 0;
            width: max-content;
            padding-left: 1vw;
            padding-right: 1vw;
        }
        .topic {
            color: #ffffff;
            background-color: #736239;
            border-radius: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: #000;
            margin: 0;
            padding: 0;
            width: max-content;
            padding-left: 1vw;
            padding-right: 1vw;
            /**/
            position: relative;
            left: 1.5vw;
        }
        .subtopic {
            color: #ffffff;
            background-color: #8f7e57;
            border-radius: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: #000;
            margin: 0;
            padding: 0;
            width: max-content;
            padding-left: 1vw;
            padding-right: 1vw;
            /**/
            position: relative;
            left: 2.5vw;
        }
        .label {
            color: #ffffff;
            background-color: #454034;
            border-radius: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: #000;
            margin: 0;
            padding: 0;
            width: max-content;
            padding-left: 1vw;
            padding-right: 1vw;
            /**/
            position: relative;
            left: 5vw;
        }
    </style>
</head>

<h1>Game Engine</h1>

<h2>Physics</h2>

<h3>Entity</h3>
<div class="class">Entity(Game: Main.Game, x: number?, y: number?, health: number?)</div>
<div class="topic">━━ Properties ━━</div>
<div class="subtopic">Entity.id: number</div>
<div class="label">READ-ONLY</div>
<div class="label">static</div>

<div class="subtopic">position: Util.Vector2i</div>
<div class="label" style="background-color: #344045">description: The position of the entity. Also stores the velocity of the entity.</div>

<div class="subtopic">visible: boolean</div>
<div class="label" style="background-color: #344045">description: Whether or not the entity renders to the screen when within the bounds of the screen</div>

<div class="subtopic">health: number</div>
<div class="label" style="background-color: #344045">description: Once the entity's health reaches or goes below 0, all event listeners added through Entity#onDeath are invoked.</div>

<div class="label">Min: 0</div>
<div class="label">Max: inf</div>
<div class="subtopic">rotation: number</div>
<div class="label" style="background-color: #344045">description: The rotation to be applied when rendering the entity</div>

<div class="subtopic">solid: boolean</div>
<div class="label" style="background-color: #344045">description: Whether this entity collides with other entities</div>

<div class="subtopic">speed: number</div>
<div class="label" style="background-color: #344045">description: How fast the entity moves</div>

<div class="subtopic">id: number</div>
<div class="label">READ-ONLY</div>
<div class="label" style="background-color: #344045">description: An identification number used internally within the engine</div>

<div class="subtopic">pixels: Array{Array{Util.Color}} (2D Array of Util.Color instances)</div>
<div class="label">READ-ONLY</div>

<div class="subtopic">width: number</div>
<div class="label">READ-ONLY</div>

<div class="subtopic">height: number</div>
<div class="label">READ-ONLY</div>

<div class="subtopic">game: Main.Game</div>
<div class="label">READ-ONLY</div>



<div class="topic">━━ Instance Methods ━━</div>
<div class="subtopic">setPixels(width: number, height: number, pixArr: Array{Util.Color}) -> void</div>

<div class="subtopic">setSprite(width: number, height: number, path: string) -> void</div>


<div class="subtopic">destroy() -> void</div>


<div class="subtopic">onDeath(c: function) -> void</div>


<div class="subtopic">removeListener(c: function) -> void</div>


<div class="subtopic">checkCollision(e: Entity) -> boolean</div>


<div class="subtopic">applyVelocity(xa: number, ya: number, timelimit: number?) -> void</div>


<div class="subtopic">moveTo(x: number, y: number) -> void</div>


<div class="subtopic">update() -> void</div>


<div class="subtopic">render() -> void</div>


### Light
<div class="class">LightSource(map: Main.GameMap, x: number?, y: number?, game: Main.Game)</div>
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
        - getLightmap() -> Dictionary {lightmap: Main.GameMap, points: Array<Array<Util.Point>>, solids: boolean}

        - getSolidObstacles -> Dictionary {boundary: Array<Util.Point>, entity: Dictionary {min: number, max: number}}
            - boundary is an Array of Util.Point which represents points in the map which are solid due to the map boundary
            - entity is a Dictionary containing the minimum position and maximum position of the entity. The bounding box for the entity.

                *Only solid entities*

<div class="class">Lighting(Game: Main.Game, map: Main.GameMap)</div>
    - Properties:
        - lights: Array<Light.LightSource>
        - map: Main.GameMap
        - game: Main.Game
        - currentLightMap: Array<Array<number>> (2D Array of numbers)
    - Methods:
        - addLight(x: number, y: number, hexColor: Util.HexColor, alpha: number?) -> void

        - generateMap(x: number, y: number) -> Array<Array<number>>

        - getLight(x:number,y:number) -> Light.LightSource | void

        - getLightsInRadiusOfPos(x: number, y: number, radius: number) -> Array<Light.LightSource>

        - render() -> void

### Main

### Particle

### Util


## User

### Controls