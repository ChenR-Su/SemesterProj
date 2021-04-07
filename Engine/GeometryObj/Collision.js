import CircleGeo from "./CircleGeo.js"
import SquareGeo from "./SquareGeo.js"
import CrossGeo from "./CrossGeo.js"
import RectangleGeo from "./RectangleGeo.js"
import Point from "./Vector.js"

export default class{
    static collisionDect(one,two){
        if(one instanceof Point){
            if(two instanceof RectangleGeo){
                return one.x >= two.x && one.y >= two.y && one.x <= two.x + two.width && one.y <= two.y + two.height;
            }
            if(two instanceof CircleGeo){
                let distance = one.distanceTo(new Point(two.x, two.y));
                if(distance < two.radius)
                  return true;
                return false;
            }
        }
        if(one instanceof CircleGeo){
            if(two instanceof SquareGeo || two instanceof RectangleGeo || two instanceof CrossGeo){
                let objects = [];
                objects.push(new CircleGeo(two.x, two.y, one.radius))
                objects.push(new CircleGeo(two.x + two.width, two.y, one.radius))
                objects.push(new CircleGeo(two.x+ two.width, two.y + two.height, one.radius))
                objects.push(new CircleGeo(two.x, two.y + two.height, one.radius))
                objects.push(new RectangleGeo(two.x - one.radius, two.y, two.width + one.radius * 2, two.height))
                objects.push(new RectangleGeo(two.x , two.y - one.radius, two.width , two.height+ one.radius * 2)) 
                if(two instanceof CrossGeo){
                    objects.push(new RectangleGeo(two.x - one.radius, two.y, two.width2 + one.radius * 2, two.height2))
                    objects.push(new RectangleGeo(two.x , two.y - one.radius, two.width2 , two.height2+ one.radius * 2)) 
                        
                }
                for(let object of objects){
                    if(this.inCollision(new Point(one.x, one.y), object)){
                      return true;
                    }
                  }
                  return false;
            }
        }
        if(one instanceof SquareGeo){
            if(two instanceof CircleGeo){
                return this.collisionDect(two,one);
            }
            if(two instanceof SquareGeo || two instanceof RectangleGeo ||two instanceof CrossGeo){
                let left = one.x;
                let right = one.x + one.width;
                let bottom = one.y;
                let top = one.y+one.height;
                if(two instanceof CrossGeo){
                    let rect = [];
                    rect.push(new RectangleGeo(two.x - two.width / 2,two.y - two.height / 2, two.width, two.height));
                    rect.push(new RectangleGeo(two.x - two.width2 / 2, two.y - two.height2 / 2, two.width2, two.height2));
                    for(let obj of rect){
                        if(this.collisionDect(new Point(one.x, one.y), obj)){
                            return true;
                        }
                    }
                    return false;
                }
                if(two.x > right)
                    return false;
                if(two.x + two.width < left)
                    return false;
                if(two.y > top)
                    return false;
                if(two.y+two.height < bottom)
                    return false;
                return true;
            }
            
        }
        if(one instanceof CrossGeo){
            if(two instanceof SquareGeo)
                return this.collisionDect(two,one);
        }
       
    }
}