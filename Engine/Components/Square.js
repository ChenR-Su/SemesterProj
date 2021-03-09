import Component from "../Component.js"
export default  class Square extends Component{
    constructor(gameObject, dimension){
        super(gameObject);
        this.dimension = dimension;
    }
}