import Scene from "./Scene.js";

class SceneManager{
    
    static currrentScene;
    static allComponents;
    static allPrefabs;
    static allScene = [];


    static setCurrentScene(sceneName){
        if(this.currrentScene && sceneName == this.currrentScene)
            return console.log("Cannot change the scene to itself")

        let proposedDefinition = this.allScene.find(i=>i.name == sceneName)
        if(!proposedDefinition)
            return console.log("Scene does not exist")

        let proposedScene = Scene.deserialize(proposedDefinition,this.allComponents,this.allPrefabs)
        this.currrentScene = proposedScene;
    
    }

}
export default SceneManager;