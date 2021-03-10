import * as Engine from "../../Engine/Engine.js"

export default class PlaceBomb extends Engine.Component{
    //Determine if bomb can be places depends on numbers of bomb carried
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        if(Engine.Input.getKeyDown("Space")){
            Engine.SceneManager.currentScene.instantiate({prefabName: "Bombs",x:this.gameObject.transform.position.x,y:this.gameObject.transform.position.y})
        }
    }
}