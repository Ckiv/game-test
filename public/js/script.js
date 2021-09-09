// Create the application helper and add its render target to the page
const app = new PIXI.Application({ width: 1360, height: 640});
document.body.appendChild(app.view);

PIXI.Loader.shared.add("../images/spritesheet.json").load(build);

function build() {

    let sheet = PIXI.Loader.shared.resources["../images/spritesheet.json"].spritesheet;

    let background = new PIXI.Sprite(sheet.textures["back.png"]);
    let austin = new PIXI.Sprite(sheet.textures["austin.png"]);
    let bookstand = new PIXI.Sprite(sheet.textures["book_stand.png"]);
    let globe = new PIXI.Sprite(sheet.textures["globe.png"]);
    let logo = new PIXI.Sprite(sheet.textures["logo.png"]);
    let plant = new PIXI.Sprite(sheet.textures["plant.png"]);
    let plant2 = new PIXI.Sprite(sheet.textures["plant_2.png"]);
    let plant3 = new PIXI.Sprite(sheet.textures["plant_3.png"]);
    let sofa = new PIXI.Sprite(sheet.textures["sofa.png"]);
    let table = new PIXI.Sprite(sheet.textures["table.png"]);
    let btn = new PIXI.Sprite(sheet.textures["btn.png"]);
    let oldstair = new PIXI.Sprite(sheet.textures["old_stair.png"]);
    let hammer = new PIXI.Sprite(sheet.textures["hammer.png"]);

    austin.position.set(696, 113);
    bookstand.position.set(834, 0);
    globe.position.set(87, 109);
    logo.position.set(32, 5);
    plant.position.set(456, 0);
    plant2.position.set(1134, 164);
    plant3.position.set(1122, 438);
    sofa.position.set(127, 324);
    table.position.set(202, 196);
    btn.position.set(502, 499);
    oldstair.position.set(833, 54);
    hammer.position.set(1087, 258);

    app.stage.addChild(background, austin, bookstand, globe, logo, plant, plant2, sofa, table, btn, oldstair, plant3, hammer);
}

