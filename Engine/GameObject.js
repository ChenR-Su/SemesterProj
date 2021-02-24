import Scene from "./Scene.js"
import SceneManager from "./SceneManager.js"

class GameObject{
    static deserialize(Game_Object_Definition,allComponents,allPrefabs){
        let result = new GameObject();
        result.name = Game_Object_Definition.name;
        for(let componentDefinition of Game_Object_Definition){
            let componentClass = SceneManager.allComponents.find(i=>i.name == componentDefinition.name);
            let component = new componentClass(result,...componentDefinition.args || []);
            result.components.push(component);
        }
        if(Game_Object_Definition.children){
            for(let childrenDefionition of Game_Object_Definition.children){
                let child = Scene.deserializeObject(childrenDefionition,allComponents,allPrefabs);
                result.children.push(child)
            }
        }
        return result;
    }

    constructor(){
        this.x = 0;
        this.y = 0;
        this.components = [];
        this.children = [];
    }

    update(){
        for(let component of this.components){
            if(component.update)
                component.update();
        }
        for(let child of this.children){
            if(child.update)
                child.update();
        }
    }

    draw(contex){
        for(let component of this.components){
            if(component.draw)
                component.draw(contex);
        }
        for(let child of this.children){
            if(child.draw)
                child.draw(contex);
        }
    }
}
export default GameObject;

