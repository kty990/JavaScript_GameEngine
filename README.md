<head>
    <style>
        /* html,body {
            background-color: #332e22;
        } */
        h3 {
            color: #ffffff;
            background-color: #b59f64;
            border-radius: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: #000;
            margin: 0;
            padding: 0;
            width: 75vw;
            position: relative;
            left: calc(25vw/2);
            text-align: center;
            margin-top: 5vh;
            margin-bottom: 10vh;
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

<body style="background-color: #332e22;">
<h1>Game Engine</h1>

<h2>Physics</h2>

<h3>Entity</h3>

<div style="color: #ffffff;             background-color: #b59f64;             border-radius: 20px;             border-style: solid;             border-width: 1px;             border-color: #000;             margin: 0;             padding: 0;             width: max-content;             padding-left: 1vw;             padding-right: 1vw;">Entity(Game: Main.Game, x: number?, y: number?, health: number?)</div>
<div style="color: #ffffff;
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
            left: 1.5vw;">━━ Properties ━━</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">Entity.id: number</div>
<div class="label">READ-ONLY</div>
<div class="label">static</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">position: Util.Vector2i</div>
<div class="label" style="background-color: #344045">description: The position of the entity. Also stores the velocity of the entity.</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">visible: boolean</div>
<div class="label" style="background-color: #344045">description: Whether or not the entity renders to the screen when within the bounds of the screen</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">health: number</div>
<div class="label" style="background-color: #344045">description: Once the entity's health reaches or goes below 0, all event listeners added through Entity#onDeath are invoked.</div> 
<div class="label">Min: 0</div>
<div class="label">Max: inf</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">rotation: number</div>
<div class="label" style="background-color: #344045">description: The rotation to be applied when rendering the entity</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">solid: boolean</div>
<div class="label" style="background-color: #344045">description: Whether this entity collides with other entities</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">speed: number</div>
<div class="label" style="background-color: #344045">description: How fast the entity moves</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">id: number</div>
<div class="label">READ-ONLY</div>
<div class="label" style="background-color: #344045">description: An identification number used internally within the engine</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">pixels: Array{Array{Util.Color}} (2D Array of Util.Color instances)</div>
<div class="label">READ-ONLY</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">width: number</div>
<div class="label">READ-ONLY</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">height: number</div>
<div class="label">READ-ONLY</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">game: Main.Game</div>
<div class="label">READ-ONLY</div>



<div style="color: #ffffff;
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
            left: 1.5vw;">━━ Instance Methods ━━</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">setPixels(width: number, height: number, pixArr: Array{Util.Color}) -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">setSprite(width: number, height: number, path: string) -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">destroy() -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">onDeath(c: function) -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">removeListener(c: function) -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">checkCollision(e: Entity) -> boolean</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">applyVelocity(xa: number, ya: number, timelimit: number?) -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">moveTo(x: number, y: number) -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">update() -> void</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">render() -> void</div>


### Light
<div style="color: #ffffff;             background-color: #b59f64;             border-radius: 20px;             border-style: solid;             border-width: 1px;             border-color: #000;             margin: 0;             padding: 0;             width: max-content;             padding-left: 1vw;             padding-right: 1vw;">LightSource(map: Main.GameMap, x: number?, y: number?, game: Main.Game)</div>
<div style="color: #ffffff;
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
            left: 1.5vw;">━━ Properties ━━</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">map: Main.GameMap</div>
<div class="label">READ-ONLY</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">emit: boolean</div>
<div class="label" style="background-color: #344045">description: Should the light emit light?</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">radius: number</div>
<div class="label" style="background-color: #344045">description: The radius of the radial light.</div>
<div class="label">Min: 0</div>
<div class="label">Min: 360</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">direction: number</div>
<div class="label" style="background-color: #344045">description: The direction the light should point. Has no effect at 360 degree radius.</div>
<div class="label">Min: 0</div>
<div class="label">Min: 360</div>


<div style="color: #ffffff;
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
            left: 2.5vw;">distance: number</div>
<div class="label" style="background-color: #344045">description: The distance or length, in (px), that the light will have an effect.</div>
<div class="label">Min: 0</div>
<div class="label">Max: inf</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">ignoreSolids: boolean</div>
<div class="label" style="background-color: #344045">description: Can the light pass through solid entities?</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">intensity: number</div>
<div class="label" style="background-color: #344045">description: How bright does the light start?</div>
<div class="label">Min: 0</div>
<div class="label">Max: 100</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">color: Util.Color</div>
<div class="label" style="background-color: #344045">description: The position of the entity. Also stores the velocity of the entity.</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">position: Util.Vector2i</div>
<div class="label" style="background-color: #344045">description: The position of the entity. Also stores the velocity of the entity.</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">game: Main.Game</div>
<div class="label">READ-ONLY</div>
<div class="label" style="background-color: #344045">description: The position of the entity. Also stores the velocity of the entity.</div>

<div style="color: #ffffff;
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
            left: 1.5vw;">━━ Instance Methods ━━</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">getLightmap() -> Dictionary {lightmap: Main.GameMap, points: Array<Array<Util.Point>>, solids: boolean}</div>

<div style="color: #ffffff;
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
            left: 2.5vw;">getSolidObstacles -> Dictionary {boundary: Array<Util.Point>, entity: Dictionary {min: number, max: number}}</div>
<div class="label" style="background-color: #344045">description: boundary is an Array of Util.Point which represents points in the map which are solid due to the map boundary.</div>  
<div class="label" style="background-color: #344045">description: entity is a Dictionary containing the minimum position and maximum position of the entity. The bounding box for the entity.</div>
<div class="label"><em>Only solid entities</em></div>

<div style="color: #ffffff;             background-color: #b59f64;             border-radius: 20px;             border-style: solid;             border-width: 1px;             border-color: #000;             margin: 0;             padding: 0;             width: max-content;             padding-left: 1vw;             padding-right: 1vw;">Lighting(Game: Main.Game, map: Main.GameMap)</div>
<div style="color: #ffffff;
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
            left: 1.5vw;">━━ Properties ━━</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">lights: Array{Light.LightSource}</div>
<div class="label">READ-ONLY</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">map: Main.GameMap</div>
<div class="label">READ-ONLY</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">game: Main.Game</div>
<div class="label">READ-ONLY</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">currentLightMap: Array{Array{number}} (2D Array of numbers)</div> 
<div class="label">READ-ONLY</div>

<div style="color: #ffffff;
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
            left: 1.5vw;">━━ Instance Methods ━━</div>
<div style="color: #ffffff;
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
            left: 2.5vw;">addLight(x: number, y: number, hexColor: Util.HexColor, alpha: number?) -> void</div>
<div class="label" style="background-color: #344045">description: </div>
<div style="color: #ffffff;
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
            left: 2.5vw;">generateMap(x: number, y: number) -> Array{Array{number}}</div>   
<div class="label" style="background-color: #344045">description: </div>
<div style="color: #ffffff;
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
            left: 2.5vw;">getLight(x:number,y:number) -> Light.LightSource | void</div>     
<div class="label" style="background-color: #344045">description: </div>
<div style="color: #ffffff;
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
            left: 2.5vw;">getLightsInRadiusOfPos(x: number, y: number, radius: number) -> Array{Light.LightSource}</div>
<div class="label" style="background-color: #344045">description: </div>
<div style="color: #ffffff;
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
            left: 2.5vw;">render() -> void</div>
<div class="label" style="background-color: #344045">description: </div>

### Main

### Particle

### Util


## User

### Controls
</body>