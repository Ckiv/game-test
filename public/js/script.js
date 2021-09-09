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
    let menu1 = new PIXI.Sprite(sheet.textures["menu-1.png"]);
    let menu2 = new PIXI.Sprite(sheet.textures["menu-2.png"]);
    let menu3 = new PIXI.Sprite(sheet.textures["menu-3.png"]);
    let ok = new PIXI.Sprite(sheet.textures["ok.png"]);
    let newstair1 = new PIXI.Sprite(sheet.textures["new_stair_01.png"]);
    let newstair2 = new PIXI.Sprite(sheet.textures["new_stair_02.png"]);
    let newstair3 = new PIXI.Sprite(sheet.textures["new_stair_03.png"]);

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
    menu1.position.set(845, 5);
    menu2.position.set(975, 5);
    menu3.position.set(1105, 5);

    hammer.interactive = true;
    hammer.buttonMode = true;
    menu1.interactive = true;
    menu1.buttonMode = true;
    menu2.interactive = true;
    menu2.buttonMode = true;
    menu3.interactive = true;
    menu3.buttonMode = true;

    app.stage.addChild(background, austin, bookstand, globe, logo, plant, plant2, sofa, table, btn, oldstair, plant3);
    function drowhammer () {
        app.stage.addChild(hammer)
    }
    setTimeout(drowhammer, 1500);

    hammer.on('pointertap', () => {
        app.stage.addChild(menu1, menu2, menu3)
        app.stage.removeChild(hammer);
    });

    menu1.on('pointertap', () => {
        ok.position.set(845, 148);
        newstair1.position.set(905, 15);
        app.stage.removeChild(oldstair, newstair2, newstair3);
        app.stage.addChild(newstair1, ok, plant3);
    });

    menu2.on('pointertap', () => {
        ok.position.set(975, 148);
        newstair2.position.set(905, 15);
        app.stage.removeChild(oldstair, newstair1, newstair3);
        app.stage.addChild(newstair2, ok, plant3);
    });

    menu3.on('pointertap', () => {
        ok.position.set(1105, 145);
        newstair3.position.set(905, 15);
        app.stage.removeChild(oldstair, newstair1, newstair2);
        app.stage.addChild(newstair3, ok, plant3);
    });
}

