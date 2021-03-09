import * as Engine from "../../Engine/Engine.js"


export default class Move extends Engine.Component{
    constructor(gameObject, speed = 1){
        super(gameObject);
        this.speed = speed;
    }
    //Move with Polling
    update(){
        if(Input.getKey("ArrowLeft") || Input.getKey("a"))
            this.gameObject.transform.x -= 1 * this.speed;
        if(Input.getKey("ArrowUp") || Input.getKey("w"))
            this.gameObject.transform.y -= 1 * this.speed;
        if(Input.getKey("ArrowRight") || Input.getKey("d"))
            this.gameObject.transform.x += 1 * this.speed;
        if(Input.getKey("ArrowDown") || Input.getKey("s"))
            this.gameObject.transform.y += 1 * this.speed;
    }
}