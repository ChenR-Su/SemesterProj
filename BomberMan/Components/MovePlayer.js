import * as Engine from "/Engine/Engine.js"


export default class MovePlayer extends Engine.Component{
    constructor(gameObject, speed = 1){
        super(gameObject);
        this.speed = speed/3;
    }
    //Move with Polling
    update() {
            if (Engine.Input.getKey("ArrowLeft") ) this.gameObject.transform.position.x -= 1 * this.speed;
            if (Engine.Input.getKey("ArrowRight")) this.gameObject.transform.position.x += 1 * this.speed;
            if (Engine.Input.getKey("ArrowUp") ) this.gameObject.transform.position.y -= 1 * this.speed;
            if (Engine.Input.getKey("ArrowDown") ) this.gameObject.transform.position.y += 1 * this.speed;
      }
}