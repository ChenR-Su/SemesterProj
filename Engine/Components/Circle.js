import Component from "../Component.js"
export default  class Circle extends Component{
    constructor(gameObject, radius){
        super(gameObject);
        this.radius = radius;
    }
}