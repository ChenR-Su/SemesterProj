import GameComponents from "../../Engine/GameComponent.js"
import SceneManager from "../../Engine/SceneManager.js"

class ChangeSceneComp extends GameComponents{
    static name = "ChangeSceneComp";
    constructor(gameObject){
        super(gameObject);
    }

    update(){
        //Change Scene based on function clicked?
    }
}

export default ChangeSceneComp;