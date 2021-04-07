import * as Engine from "../../Engine/Engine.js"

export default class ExplosionCountDown extends Engine.Component{
    //Create an explosion object?
    constructor(gameObject){
        super(gameObject)
        this.countDown = 50;
    }
    update(){
        if(this.countDown == 0){
            this.gameObject.destroy();
        }
        else
            this.countDown--;
    }
}