import Component from "../Component.js"
import CrossGeo from "../GeometryObj/CrossGeo.js"
export default  class Cross extends Component{
    constructor(gameObject, width, height){
        super(gameObject);
        this.width = width;
        this.height = height;
        this.width2 = height;
        this.height2 = width;
        
    }
    asGeometry(){
        return new CrossGeo(this.gameObject.transform.position.x,this.gameObject.transform.position.y,this.width,this.height,this.width2,this.height2);
    }

   
}