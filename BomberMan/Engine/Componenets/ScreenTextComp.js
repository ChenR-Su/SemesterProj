import GameComponents from "../GameComponent.js"

class ScreenTextComponent extends GameComponents{
    static name = "ScreenTextComponent"
    constructor(gameObject,string,options){
        super(gameObject);
        this.string = string;
        this.color = options?.color || "white";
        this.font = options?.font || "32pt arial";
    }

    draw(contex){
        contex.fillStyle = this.color;
        contex.font = this.font;
        contex.fillText(this.string,this.gameObject.x,this.gameObject.y);

    }
}

export default ScreenTextComponent;