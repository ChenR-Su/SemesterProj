import * as Engine from "../../Engine/Engine.js"

export default class EnemyBombExplosion extends Engine.Component{
    //Create an explosion object?
    constructor(gameObject){
        super(gameObject)
        this.countDown = 100;
        this.bombDestoryed = false;
        this.currBomb;
    }
    update(){
        if(this.countDown == 0){
            this.bombDestoryed = true;
            this.gameObject.destroy();
            this.currBomb = Engine.SceneManager.currentScene.instantiate({prefabName: "EnemyExplosion",x:this.gameObject.transform.position.x,y:this.gameObject.transform.position.y})
        }
        else
            this.countDown--;
    }
}