import Component from "../Component.js"
export default  class CircleGeometryComponent extends Component{
    constructor(gameObject, radius){
        super(gameObject);
        this.radius = radius;
    }
}