import GameComponents from "../GameComponent.js"

class Draw extends GameComponents{
    static name = "Draw"
    constructor(gameObject,color,shape){
        super(gameObject);
        this.color = color;
        this.shape = shape;
    }

    draw(contex){
        contex.fillStyle = this.color;
        if(this.shape == "rec"){
            contex.filRect(this.gameObject.x,this.gameObject.y, 50,30);
        }
        else if(this.shape == "cir"){
            contex.lineWidth = 2;
            contex.arc(this.gameObject.x,this.gameObject.y,30,0,2*Math.PI,false);
            contex.fill();
        }
        else if(this.shape == "tri"){
            contex.beginPath();
            contex.moveTo(this.gameObject.x,this.gameObject.y);
            contex.lineTo(this.gameObject.x,this.gameObject.y+20);
            contex.lineTo(this.gameObject.x+20,this.gameObject.y+20);
            contex.closePath();
            contex.fill();
        }
        else if(this.shape == "squ"){
            contex.filRect(this.gameObject.x,this.gameObject.y, 30,30);
        }
        else{
            console.error("This Particular Shape is not Accepted")
        }
    }

}

export default Draw;