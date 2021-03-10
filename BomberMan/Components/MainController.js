import * as Engine from "../../Engine/Engine.js"

const SceneManager = Engine.SceneManager;

export default class MainController extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }
    start(){
        this.player = SceneManager.currentScene.getGameObject("Player");
        SceneManager.currentScene.instantiate({prefabName:"LeftRightBorderWalls"});
    }
    update(){

    }
}