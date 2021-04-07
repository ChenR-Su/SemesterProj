import Scene from "./Scene.js"
import SceneManager from "./SceneManager.js"
import * as Engine from "./Components/EngineComponents.js"

export default class GameObject{
    static deserialize(gameObjectDefinition) {
        let toReturn = new GameObject(); 
        toReturn.name = gameObjectDefinition.name; 
        if (gameObjectDefinition.components){
            for (let componentDefinition of gameObjectDefinition.components) { 
                let componentClass = SceneManager.allComponents.find(i => (new i()).constructor.name == componentDefinition.name); 
                let component = new componentClass(toReturn, ...componentDefinition.args || []);
                toReturn.components.push(component);
            }
        }
        if (gameObjectDefinition.children)
            for (let childDefinition of gameObjectDefinition.children) {
                let child = Scene.deserializeObject(childDefinition);
                toReturn.transform.children.push(child);
            }
        return toReturn;
    }

    constructor(){
        this.components = [];
        this.markedDestory = false;
        this.components.push(new Engine.Transform());
    }

    update() {
        for (let component of this.components) {
            if (component.update) 
                component.update();
        }
        for(let child of this.transform.children){
            child.update();
        }
    }



    draw(ctx) {
        //ctx.save()
        //ctx.translate(this.transform.position.x,this.transform.position.y);
        //ctx.scale(this.transform.scale.x,this.transform.scale.y);
        // ctx.rotate(this.transform.rotation);
        
        for (let component of this.components) {
            if (component.draw) 
                component.draw(ctx);
        }
        for(let child of this.transform.children){
            child.draw(ctx);
        }
        //ctx.restore()
    }

    destroy(){
        this.markedDestroy = true;
    }

    getGameObject(name){
        for(let child of this.transform.children){
            if(child.name == name) return child;
            let foundChild = child.getGameObject(name);
            if(foundChild) return foundChild;
        }
        
    }
    getComponent(name){
        for(let component of this.components){
            if(component.constructor.name == name)
                return component;
        }
        for(let child of this.transform.children){
            let component = child.getComponent(name);
            if(component) return component;
        }
    }
    callMethod(name, args){
        for(let component of this.components){
            if(component[name])
                component[name](args);
        }
        for(let child of this.transform.children){
            child.callMethod(name, args);
        }
    }

    get transform(){
        return this.components[0];
    }

    get state(){
        return this.markedDestroy;
    }
}