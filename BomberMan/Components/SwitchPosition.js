import * as Engine from "../../Engine/Engine.js"
const SceneManager = Engine.SceneManager
export default class SwitchPosition extends Engine.Component {
    
    //Create an explosion object?
    constructor(gameObject) {
        super(gameObject)
        this.tick = 500;
        this.currX;
        this.currY;
        this.blockPosition = [];
        this.wallPosition = [];
    }
    update() {
        this.blockPosition = SceneManager.currentScene.getGameObject("MainController").getComponent("MainController").getBlockGeo()
        this.wallPosition = SceneManager.currentScene.getGameObject("MainController").getComponent("MainController").getWallGeo()
        if (this.tick != 0) {
            this.tick--;
        }
        else {
            do{
                this.newPosition()
            }while(!this.validPosition())
            this.gameObject.transform.position.x = this.currX;
            this.gameObject.transform.position.y = this.currY
            if (Engine.SceneManager.currentScene.name == "MultiPlayerScene")
                this.tick = 250
            else
                this.tick = 500;
        }

    }

    newPosition() {
        do {
            this.currX = Math.floor(Math.random() * 73) - 36;
        } while (this.currX % 6 != 0)
        do {
            this.currY = Math.floor(Math.random() * 73) - 36;
        } while (this.currY % 6 != 0)
    }

    validPosition(){
        for(let block of this.blockPosition){
            if(block.x == this.currX && block.y == this.currY)
                return false;
        }
        for(let wall of this.wallPosition){
            if(wall.x == this.currX && wall.y == this.currY)
                return false
        }
        return true;    
    }
}