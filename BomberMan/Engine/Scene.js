import GameObject from "./GameObject.js"
import SceneManager from "./SceneManager.js"

class Scene{
    constructor(){
        this.children = [];
    }

    static deserializeObject(objectDefinition){
        let gameObject;
        let gameObjectDefinition;
        if(objectDefinition.prefabName){
            gameObjectDefinition = SceneManager.allPrefabs.find(i=>i.name == objectDefinition.name);
            gameObjectDefinition.children = objectDefinition.children;
        }
        else    
            gameObjectDefinition = objectDefinition.gameObject;
        gameObject = GameObject.deserialize(gameObjectDefinition,SceneManager.allComponents,SceneManager.allPrefabs);
        gameObject.x = childDefiniton.x || 0;
        gameObject.y = childDefiniton.y || 0;
        return gameObject;
    }

    static deserialize(sceneDefinition){
        let result = new Scene();
        result.name = sceneDefinition.name;
        for(let childDefiniton of sceneDefinition.children){
            let gameObject;
            let gameObjectDefinition;
            if(childDefiniton.prefabName)
                gameObjectDefinition = SceneManager.allPrefabs.find(i=>i.name == childDefiniton.prefabName)
            else
                gameObjectDefinition = childDefiniton.gameObject;

            gameObject = GameObject.deserialize(gameObjectDefinition,SceneManager.allComponents,SceneManager.allPrefabs);
            gameObject.x = childDefiniton.x || 0;
            gameObject.y = childDefiniton.y || 0;
            result.children.push(gameObject);
        }
        return result;
    }

    getChildren(){
        return this.children;
    }
    addChild(child){
        this.children.push(child);
    }
    draw(contex){
        for(let child of this.children)
            child.draw(contex);
    }
    update(){
        for(let child of this.children)
            child.update();
    }

    Destoryed(){
        let newChildren = [];
        for(let child of this.children){
            if(!child.markedDestory)
                newChildren.push(child);
        }
        this.children = newChildren;
    }

    getGameObject(name){
        for(let child of this.children){
            if(child.name = name)
                return child;
            let foundChild = child.getGameObject;
            if(foundChild)
                return foundChild;
        }
        console.error("Could Not Find The Particular Child");
    }

    instantiate(objectDescription){
        let newObject = Scene.deserializeObject(objectDescription);
        this.addChild(newObject);
    }

    callMethod(name,args){
        for(let child of this.children)
            child.callMethod(name,args);
    }
}

export default Scene;