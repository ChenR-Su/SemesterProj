import * as Engine from "../Engine/Engine.js"

import * as GameScenes from "./Scenes/GameScenes.js"
import * as GamePrefabs from "./Prefabs/GamePrefabs.js"
import * as EngineComponents from "../Engine/Components/EngineComponents.js"
import * as GameComponents from "./Components/GameComponents.js"

function boot(mainSceneName) {

  let canvas = document.getElementById("canv");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight
  let ctx = canvas.getContext("2d");

  Engine.Input.attach(document);

  Engine.SceneManager.allComponents = [...Object.keys(Engine.EngineComponents).map(i => EngineComponents[i]), ...Object.keys(GameComponents).map(i => GameComponents[i])];
  Engine.SceneManager.allPrefabs = Object.keys(GamePrefabs).map(i => GamePrefabs[i]);
  Engine.SceneManager.allScenes = Object.keys(GameScenes).map(i=>GameScenes[i]);
  Engine.SceneManager.changeScene(mainSceneName);

  function gameLoop() {
    clear();
    Engine.Input.SwapArrays();
    let currentScene = Engine.SceneManager.currentScene;
    currentScene.draw(ctx);
    currentScene.update();
    currentScene.cullDestroyed();
  }

  function clear() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  setInterval(gameLoop, 1000 / 60)
}

export default boot;