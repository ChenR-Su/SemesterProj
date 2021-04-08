import * as Engine from "../../Engine/Engine.js"

export default class SwitchPosition extends Engine.Component{
    //Create an explosion object?
    constructor(gameObject){
        super(gameObject)
        this.tick = 500;
        this.currX;
        this.currY;
    }
    update(){
        if(this.tick != 0){
            this.tick--;
        }
        else{
          this.newPosition();
          this.gameObject.transform.position.x = this.currX;
          this.gameObject.transform.position.y = this.currY  
          this.tick = 500;
        }
        
    }

    newPosition(){
        do{
            this.currX = Math.floor(Math.random()*73) - 36;
        }while(this.currX % 6 != 0)
        do{
            this.currY = Math.floor(Math.random()*73) - 36;
        }while(this.currY % 6 != 0)
    }
}