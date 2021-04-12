import * as Engine from "../../Engine/Engine.js"

export default class ChangeScene extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  next() {
    let currentSceneName = Engine.SceneManager.currentScene.name;
    if (currentSceneName == "InitialScene") {
      if (Engine.Input.getKeyDown(1)) {
        Engine.SceneManager.changeScene("SinglePlayerIns");
      }
      if (Engine.Input.getKeyDown(2)) {
        Engine.SceneManager.changeScene("MultiPlayerIns");
      }
    }
    else if (currentSceneName == "VictoryScene" || currentSceneName == "DefeatScene") {
      if (Engine.Input.getKeyDown("y")) 
        Engine.SceneManager.changeScene("InitialScene");
      else if(Engine.Input.getKeyDown("n"))
        Engine.SceneManager.changeScene("EndScene");
    }
    else if(currentSceneName == "SinglePlayerIns"){
      if (Engine.Input.getMouseButton(0)) 
        Engine.SceneManager.changeScene("PlayScene");
    }   
    else if(currentSceneName =="MultiPlayerIns"){
      if (Engine.Input.getMouseButton(0)) 
        Engine.SceneManager.changeScene("MultiPlayerScene");
    }
    else if(currentSceneName == "PlayScene"){
      let PlayerRemaining = Engine.SceneManager.currentScene.getGameObject("Player")
      let EnemyRemaining = Engine.SceneManager.currentScene.getGameObject("Enemy")
      if(EnemyRemaining && !PlayerRemaining){

        Engine.SceneManager.changeScene("DefeatScene")
      } 
      else if(!EnemyRemaining && PlayerRemaining){
        Engine.SceneManager.changeScene("VictoryScene")
      }
       
    }
    else if(currentSceneName == "MultiPlayerScene"){
      let PlayerRemaining = Engine.SceneManager.currentScene.getGameObject("Player")
      let Player2Remaining = Engine.SceneManager.currentScene.getGameObject("Player2")
      let EnemyRemaining = Engine.SceneManager.currentScene.getGameObject("Enemy")
      if(!Player2Remaining && !PlayerRemaining && EnemyRemaining){ 
        Engine.SceneManager.changeScene("DefeatScene")
      }
      else if((PlayerRemaining || Player2Remaining) &&  !EnemyRemaining){
        Engine.SceneManager.changeScene("VictoryScene")
      }

    }
    
  }
}