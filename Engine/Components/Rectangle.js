import Component from "../Component.js"
export default  class Rectangle extends Component{
    constructor(gameObject, width, height){
        super(gameObject);
        this.width = width;
        this.height = height;
    }
}