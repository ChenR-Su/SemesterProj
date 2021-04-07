import GameObject from "./GameObject.js"
import SceneManager from "./SceneManager.js"

export default class Scene {

    children = [];

    static deserializeObject(objectDefinition) {
        let gameObject;
        let gameObjectDefinition;
        if (objectDefinition.prefabName) 
            gameObjectDefinition = SceneManager.allPrefabs.find(i => i.name == objectDefinition.prefabName);
        else 
            gameObjectDefinition = objectDefinition.gameObject;

        if (!gameObjectDefinition) throw "Could not find a prefab or game object description (deserializeObject) in " + JSON.stringify(objectDefinition, null, 2)
        gameObject = GameObject.deserialize(gameObjectDefinition); 
        gameObject.transform.position.x = objectDefinition.x || 0;
        gameObject.transform.position.y = objectDefinition.y || 0; 
        gameObject.transform.scale.x = objectDefinition.sx || 1; 
        gameObject.transform.scale.y = objectDefinition.sy || 1; 
        gameObject.transform.rotation = objectDefinition.r || 0; 
        return gameObject
    }

    static deserialize(sceneDefinition) {
        let toReturn = new Scene(); 
        toReturn.name = sceneDefinition.name; 
        for (let objectDefinition of sceneDefinition.children) { 
            let gameObject = this.deserializeObject(objectDefinition)
            toReturn.addChild(gameObject);
        }
        return toReturn;

    }


    getChildren() {
        return this.children;
    }

    addChild(child) {
        this.children.push(child)
    }


    draw(ctx) {
        ctx.save();
        ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)
        ctx.scale(this.camera.transform.scale.x, this.camera.transform.scale.y)
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            if (child.name == "ScreenCamera") continue;
            child.draw(ctx);
        }
        ctx.restore();
        ctx.save();
        this.screenCamera.draw(ctx)
        ctx.restore();
    }
    get camera() {
        return this.getGameObject("MainCamera");
    }
    get screenCamera(){
        return this.getGameObject("ScreenCamera")
    }
    update() {
        for (let child of this.children) {
            child.update();
        }
    }

    cullDestroyed() {
        let newChildren = [];
        for (let child of this.children) {
            if (!child.markedDestroy)
                newChildren.push(child);
        }
        this.children = newChildren;
    }

    getGameObject(name) {
        for (let child of this.children) {
            if (child.name == name) return child;
            let foundChild = child.getGameObject(name);
            if (foundChild) return foundChild;
        }
    }

    instantiate(objectDescription) {
        let newObject = Scene.deserializeObject(objectDescription);
        this.addChild(newObject)
    }

    callMethod(name, args) {
        for (let child of this.children) {
            child.callMethod(name, args);
        }
    }
}