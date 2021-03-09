import * as Engine from "../../Engine/Engine.js"

export default class SceneCountDown extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.tick = 0;
    }
    update(){
        this.tick++;
        if(this.tick > 50){
            this.gameObject.getComponent("ChangeScene").next();
        }
    }
}