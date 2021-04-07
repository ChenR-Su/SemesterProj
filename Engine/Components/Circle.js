import Component from "../Component.js"
import CircleGeo from "../GeometryObj/CircleGeo.js";
export default  class Circle extends Component{
    constructor(gameObject, radius){
        super(gameObject);
        this.radius = radius;
    }
    asGeometry(){
        return new CircleGeo(this.gameObject.transform.position.x, this.gameObject.transform.position.y, this.radius)
    }
}