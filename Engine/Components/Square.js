import Component from "../Component.js"
import SquareGeo from "../GeometryObj/SquareGeo.js"
export default  class Square extends Component{
    constructor(gameObject, dimension){
        super(gameObject);
        this.dimension = dimension;   
    }

    asGeometry(){
        return new SquareGeo(this.gameObject.transform.position.x,this.gameObject.transform.position.y,this.dimension,this.dimension);
    }

}