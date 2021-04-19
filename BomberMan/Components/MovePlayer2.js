import * as Engine from "../../Engine/Engine.js"


export default class MovePlayer2 extends Engine.Component {
    constructor(gameObject, speed = 1) {
        super(gameObject);
        this.speed = speed / 3;
        this.nonCollideX;
        this.nonCollideY;
        this.playerX
        this.playerY
        this.BlockGeo = []
        this.WallGeo = []
    }
    //Move with Polling
    update() {
        this.playerX = this.gameObject.transform.position.x
        this.playerY = this.gameObject.transform.position.y
        this.BlockGeo = Engine.SceneManager.currentScene.getGameObject("MainController").getComponent("MainController").getBlockGeo()
        this.WallGeo = Engine.SceneManager.currentScene.getGameObject("MainController").getComponent("MainController").getWallGeo()
        if (this.playerX >= 36)
            this.gameObject.transform.position.x = 36;
        if (this.playerX <= -36)
            this.gameObject.transform.position.x = -36;
        if (this.playerY >= 36)
            this.gameObject.transform.position.y = 36;
        if (this.playerY <= -36)
            this.gameObject.transform.position.y = -36;
        if (Engine.Input.getKey("a")) {
            if (!this.collDect()) {
                this.storePos();
                this.gameObject.transform.position.x -= 1 * this.speed;
            }
            else{
                this.setPos();
            }
        }
        if (Engine.Input.getKey("d")) {
            if (!this.collDect()) {
                this.storePos();
                this.gameObject.transform.position.x += 1 * this.speed;
            }
            else{
                this.setPos();
            }
        }
        if (Engine.Input.getKey("w")) {
            if (!this.collDect()) {
                this.storePos();
                this.gameObject.transform.position.y -= 1 * this.speed;
            }
            else{
                this.setPos();
            }
        }
        if (Engine.Input.getKey("s")) {
            if (!this.collDect()) {
                this.storePos();
                this.gameObject.transform.position.y += 1 * this.speed;
            }
            else{
                this.setPos();
            }
        }
    }

    setPos(){
        this.gameObject.transform.position.x = this.nonCollideX;
        this.gameObject.transform.position.y = this.nonCollideY;
    }
    storePos(){
        this.nonCollideX = this.gameObject.transform.position.x
        this.nonCollideY = this.gameObject.transform.position.y
    }

    collDect(){
        let store;
        for(let walls of this.WallGeo){
            store = Engine.EngineGeo.Collision.collisionDect(this.gameObject.getComponent("Square").asGeometry(),walls);
            if(store)
                return store
        }
        for(let block of this.BlockGeo){
            store = Engine.EngineGeo.Collision.collisionDect(this.gameObject.getComponent("Square").asGeometry(),block);
            if(store)
                return store
        }
        return false;
    }

}