import * as Engine from "/Engine/Engine.js"


export default class MovePlayer2 extends Engine.Component{
    constructor(gameObject, speed = 1){
        super(gameObject);
        this.speed = speed/3;
    }
    //Move with Polling
    update() {
            if (Engine.Input.getKey('a')) this.gameObject.transform.position.x -= 1 * this.speed;
            if (Engine.Input.getKey('d')) this.gameObject.transform.position.x += 1 * this.speed;
            if  (Engine.Input.getKey('w')) this.gameObject.transform.position.y -= 1 * this.speed;
            if ( Engine.Input.getKey('s')) this.gameObject.transform.position.y += 1 * this.speed;
      }
}