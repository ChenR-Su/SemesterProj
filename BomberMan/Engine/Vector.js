class Vector{
    x;
    y;
    constructor(one,two){
        if(arguments.length == 0){
            this.x = 0;
            this.y = 0;
            return;
        }
        if(arguments.length == 1){

            if(Array.isArray(one)){
                if(one.length <= 1){
                    console.error("Vector Must Accept at least 2 parameter variable");
                    return;
                }
                this.x = one[0];
                this.y = one[1];
                return
            }
            else{
                if((!one.x && one.x != 0) || (!one.y && one.y != 0)){
                    console.error("Non Empty Array as Single Argument Must have X and Y Key")
                    return;
                }
                this.x = one.x;
                this.y = one.y;
                return;
            }
        }
        if(arguments.length ==2){
            this.x = one;
            this.y = two;
        }
    }

    static increase(one,two){
        return new Vector(one.x + two.x, one.y + two.y);
    }

    static decrease(one,two){
        return new Vector(one.x - two.x, one.y - two.y);
    }

    static scale(scalar){
        this.x *= scalar;
        this.y *= scalar;
    }

    length(){
        return Math.sqrt(this.lengthSquard());
    }

    lengthSquard(){
        return this.x * this.x + this.y * this.y;
    }

    static normalize(vector){
        let result = new Vector(vector);
        result.normalize();
        return result;
    }

    normalize(){
        let length = this.getLength;
        this.y /= length;
        this.x /= length;
    }

    static equals(one,two){
        return one.x == two.x && one.y == two.y;
    }

    equals(otherObject){
        return Vector.equals(this,otherObject);
    }
}

export default Vector;