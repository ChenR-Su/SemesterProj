import * as Engine from "/Engine/Engine.js"


export default class MovePlayer extends Engine.Component{
    constructor(gameObject, speed = 1){
        super(gameObject);
        this.speed = speed/3;
        this.nonCollideX;
        this.nonCollideY;
    }
    //Move with Polling

}