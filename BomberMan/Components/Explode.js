import * as Engine from "../../Engine/Engine.js"

export default class Explode extends Engine.Component{
    //Create an explosion object?
    constructor(gameObject){
        super(gameObject)
        this.countDown = 100;
    }
    update(){
        if(this.countDown == 0){
            this.gameObject.destroy();
            Engine.SceneManager.currentScene.instantiate({prefabName: "Explosion",x:this.gameObject.transform.position.x,y:this.gameObject.transform.position.y})
        }
        else
            this.countDown--;
    }
}