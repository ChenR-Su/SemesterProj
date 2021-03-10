import * as Engine from "../../Engine/Engine.js"

export default  class ChangeScene extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  next(){
    let currentSceneName = Engine.SceneManager.currentScene.name;
    if(currentSceneName == "InitialScene" || currentSceneName == "DefeatScene"){
       if(Engine.Input.getMouseButtonDown(0)){
           Engine.SceneManager.changeScene("PlayScene");
       }
    }
    else if(currentSceneName == "VictoryScene" ){
        if(Engine.Input.getMouseButtonDown(0)){
            Engine.SceneManager.changeScene("InitialScene");
        }
    }
  }
}