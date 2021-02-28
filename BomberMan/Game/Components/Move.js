import GameComponents from "../../Engine/GameComponent.js"
import Input from "../../Engine/Input.js"

class Move extends GameComponents{
    static name = "Move";
    constructor(gameObject, speed = 1){
        super(gameObject);
        this.speed = speed;
    }

    //Move with polling
    update(){
        if(Input.getKey("ArrowLeft") || Input.getKey("a"))
            this.gameObject.x -= 1 * this.speed;
        if(Input.getKey("ArrowUp") || Input.getKey("w"))
            this.gameObject.y -= 1 * this.speed;
        if(Input.getKey("ArrowRight") || Input.getKey("d"))
            this.gameObject.x += 1 * this.speed;
        if(Input.getKey("ArrowDown") || Input.getKey("s"))
            this.gameObject.y += 1 * this.speed;
    }
}
export default Move;