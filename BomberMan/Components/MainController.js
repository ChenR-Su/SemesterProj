import * as Engine from "../../Engine/Engine.js"
import InnerWall from "../Prefabs/InnerWall.js";

const SceneManager = Engine.SceneManager;
let wallName = "InnerWall";
let blockName = "Block";

export default class MainController extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
    }
    start() {
        this.player = SceneManager.currentScene.getGameObject("Player");
        SceneManager.currentScene.instantiate({ prefabName: "LeftRightBorderWalls", x: 40 });
        SceneManager.currentScene.instantiate({ prefabName: "LeftRightBorderWalls", x: -40 });
        SceneManager.currentScene.instantiate({ prefabName: "TopBottomBorderWalls", y: 40 });
        SceneManager.currentScene.instantiate({ prefabName: "TopBottomBorderWalls", y: -40 });
        //Vertical Line Down Middle
        this.mapGeneration();
        //Surrounding Brackets
        //this.surroundingBracket();

    }

    mapGeneration(){
        this.middleCross();
        this.surroundingBracket();
        this.diagnol();
    }

    middleCross() {
        for(let x = -36; x<=36;x+=6){
            for(let y = -36; y<=36;y+=6){
                let ypos = Math.abs(y);
                let xpos = Math.abs(x);
                if((ypos == 0 || xpos ==0) && (xpos != 6 && ypos != 6) && (xpos != 30 && ypos != 30))
                    SceneManager.currentScene.instantiate({ prefabName: wallName, x:x,y: y });
                else if(ypos == 0 || xpos ==0)
                    SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y });
                else if((xpos <=24 && ypos <=24)&&(ypos >= 24 || xpos >= 24) && (ypos != 6 && xpos!=0))
                    SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y });
            }
        }
    }

    surroundingBracket() {
        for(let x = -24; x<=24;x+=6){
            for(let y = -24; y<=24;y+=6){
                let ypos = Math.abs(y);
                let xpos = Math.abs(x);
                let range = Boolean(ypos >= 24 || xpos >= 24)
                let corner = Boolean((xpos == 24 || xpos == 18) && (ypos == 24 || ypos == 18))
                let lineCross = Boolean(ypos != 6 && xpos!=0)
                if(range && lineCross && !corner)
                    SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y });
                else if(range && lineCross && corner)
                    SceneManager.currentScene.instantiate({ prefabName: wallName, x:x,y: y });
            }
        }
    }

    diagnol(){
        for(let x = -36; x<=36;x+=6){
            for(let y = -36; y<=36;y+=6){
                let ypos = Math.abs(y);
                let xpos = Math.abs(x);
                let overlap = Boolean(xpos == 24 || ypos ==24 || xpos == 0 || ypos == 0);
                let first = Boolean(xpos == 12|| ypos == 12)
                if(xpos == ypos && !overlap && !first)
                    SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y });
                else if(xpos == ypos && !overlap && first)
                    SceneManager.currentScene.instantiate({ prefabName: wallName, x:x,y: y });
            }
        }
    }

    update() {
        if(this.player.x > 60)
            
    }
}