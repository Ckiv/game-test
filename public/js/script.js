// Create the application helper and add its render target to the page
const app = new PIXI.Application({ width: 1360, height: 640});
let ticker = PIXI.Ticker.shared;
document.body.appendChild(app.view);

PIXI.Loader.shared.add("../images/spritesheet.json").load(build);

const circle1 = new PIXI.Graphics();
const circle2 = new PIXI.Graphics();
const circle3 = new PIXI.Graphics();
let count=0;
let temp=1;

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
    let menu1 = new PIXI.Sprite(sheet.textures["menu_1.png"]);
    let menu2 = new PIXI.Sprite(sheet.textures["menu_2.png"]);
    let menu3 = new PIXI.Sprite(sheet.textures["menu_3.png"]);
    let ok = new PIXI.Sprite(sheet.textures["ok.png"]);
    let newstair1 = new PIXI.Sprite(sheet.textures["new_stair_01.png"]);
    let newstair2 = new PIXI.Sprite(sheet.textures["new_stair_02.png"]);
    let newstair3 = new PIXI.Sprite(sheet.textures["new_stair_03.png"]);
    let final = new PIXI.Sprite(sheet.textures["final.png"]);

    austin.position.set(696, 113);
    bookstand.position.set(834, 0);
    globe.position.set(87, 109);
    logo.position.set(32, 5);
    plant.position.set(456, 0);
    plant2.position.set(1134, 164);
    plant3.position.set(1122, 438);
    sofa.position.set(127, 324);
    table.position.set(202, 196);
    btn.anchor.set(0.5, 0.5);
    btn.position.set(684, 561);
    oldstair.position.set(833, 54);
    hammer.position.set(1087, 258);
    menu1.position.set(869, 5);
    menu2.position.set(1000, 5);
    menu3.position.set(1124, 5);

    hammer.interactive = true;
    hammer.buttonMode = true;
    menu1.interactive = true;
    menu1.buttonMode = true;
    menu2.interactive = true;
    menu2.buttonMode = true;
    menu3.interactive = true;
    menu3.buttonMode = true;
    ok.interactive = true;
    ok.buttonMode = true;

    app.stage.addChild(background, austin, bookstand, globe, logo, plant, plant2, sofa, table, btn, oldstair, plant3);
    function drowhammer () {
        app.stage.addChild(hammer)
    }
    setTimeout(drowhammer, 1500);

    hammer.on('pointertap', () => {
        drawCircle();
        app.stage.removeChild(hammer);
    });

    menu1.on('pointertap', () => {
        activeItem("menu1");
        ok.position.set(845, 148);
        /*app.ticker.add((delta) => {
                newstair1.position.set(905, 5+temp);
                temp += 0.5;
                if (5+temp>15) {
                    app.ticker.stop();
                }
        });*/
        newstair1.position.set(905, 15);
        app.stage.removeChild(oldstair, newstair2, newstair3);
        app.stage.addChild(newstair1, ok, plant3);
    });

    menu2.on('pointertap', () => {
        activeItem("menu2");
        ok.position.set(975, 148);
        /*app.ticker.add((delta) => {
            newstair2.position.set(905, 5+temp);
            temp += 0.5;
            if (5+temp>15) {
                app.ticker.stop();
            }
        });*/
        newstair2.position.set(905, 15);
        app.stage.removeChild(oldstair, newstair1, newstair3);
        app.stage.addChild(newstair2, ok, plant3);
    });

    menu3.on('pointertap', () => {
        activeItem("menu3");
        ok.position.set(1105, 148);
        /*app.ticker.add((delta) => {
            newstair3.position.set(905, 5+temp);
            temp += 0.5;
            if (5+temp>15) {
                app.ticker.stop();
            }
        });*/
        newstair3.position.set(905, 15);
        app.stage.removeChild(oldstair, newstair1, newstair2);
        app.stage.addChild(newstair3, ok, plant3);
    });

    ok.on('pointertap', () => {
        final.position.set(391, 53);
        app.stage.removeChild(ok);
        app.stage.addChild(final);
    });

    app.ticker.add((delta) => {
        btn.scale.x = 1 + Math.sin(count) * 0.02;
        btn.scale.y = 1 + Math.cos(count) * 0.02;
        count += 0.1;
    });

    function drawCircle() {

        circle1.lineStyle(2, 0xFFFFFF, 1);
        circle1.beginFill(0xf9d2a7, 1);
        circle1.drawCircle(908, 70, 55);
        circle1.endFill();

        circle2.lineStyle(2, 0xFFFFFF, 1);
        circle2.beginFill(0xf9d2a7, 1);
        circle2.drawCircle(1038, 70, 55);
        circle2.endFill();

        circle3.lineStyle(2, 0xFFFFFF, 1);
        circle3.beginFill(0xf9d2a7, 1);
        circle3.drawCircle(1168, 70, 55);
        circle3.endFill();

        app.stage.addChild(circle1, circle2, circle3, menu1, menu2, menu3);
    }

    function activeItem(temp) {
        drawCircle();

        if (temp==="menu1") {
            circle1.lineStyle(2, 0xFFFFFF, 1);
            circle1.beginFill(0xb8e213, 1);
            circle1.drawCircle(908, 70, 55);
            circle1.endFill();
            app.stage.addChild(circle1, menu1);
        }
        else if (temp==="menu2") {
            circle2.lineStyle(2, 0xFFFFFF, 1);
            circle2.beginFill(0xb8e213, 1);
            circle2.drawCircle(1038, 70, 55);
            circle2.endFill();
            app.stage.addChild(circle2, menu2);
        }
        else if (temp==="menu3") {
            circle3.lineStyle(2, 0xFFFFFF, 1);
            circle3.beginFill(0xb8e213, 1);
            circle3.drawCircle(1168, 70, 55);
            circle3.endFill();
            app.stage.addChild(circle3, menu3);
        }


    }
}

