import Component from "../Component.js"
export default  class Triangle extends Component{
    constructor(gameObject, dimension){
        super(gameObject);
        this.dimension = dimension;
    }
}