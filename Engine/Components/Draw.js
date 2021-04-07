import Component from "../Component.js"
export default class Draw extends Component {
    constructor(gameObject, color) {
        super(gameObject);
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        let Rectangle = this.gameObject.getComponent("Rectangle")
        let Triangle = this.gameObject.getComponent("Triangle");
        let Circle = this.gameObject.getComponent("Circle");
        let Square = this.gameObject.getComponent("Square");
        let Cross = this.gameObject.getComponent("Cross");
        if (Rectangle) {
            ctx.fillRect(this.gameObject.transform.position.x - Rectangle.width / 2, this.gameObject.transform.position.y - Rectangle.height / 2, Rectangle.width, Rectangle.height);
        }
        if (Circle) {
            ctx.beginPath();
            ctx.arc(this.gameObject.transform.position.x, this.gameObject.transform.position.y, Circle.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        if (Square) {
            ctx.fillRect(this.gameObject.transform.position.x - Square.dimension / 2, this.gameObject.transform.position.y - Square.dimension / 2, Square.dimension, Square.dimension);
        }
        if (Triangle) {
            ctx.beginPath();
            ctx.moveTo(this.gameObject.transform.dimension, this.gameObject.transform.dimension);
            ctx.lineTo(this.gameObject.transform.dimension, this.gameObject.transform.dimension - 10);
            ctx.lineTo(this.gameObject.transform.dimension + 20, this.gameObject.transform.dimension + 10);
            ctx.closePath();
            ctx.fill();
        }
        if(Cross){
            ctx.fillRect(this.gameObject.transform.position.x - Cross.width / 2, this.gameObject.transform.position.y - Cross.height / 2, Cross.width, Cross.height);
            ctx.fillRect(this.gameObject.transform.position.x - Cross.width2 / 2, this.gameObject.transform.position.y - Cross.height2 / 2, Cross.width2, Cross.height2);
        }

    }
}