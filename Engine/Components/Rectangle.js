import Component from "../Component.js"
import RectangleGeo from "../GeometryObj/RectangleGeo.js";
export default  class Rectangle extends Component{
    constructor(gameObject, width, height){
        super(gameObject);
        this.width = width;
        this.height = height;
    }

    asGeometry(){
        return new RectangleGeo(this.gameObject.transform.position.x,this.gameObject.transform.position.y,this.width,this.height);
    }
}