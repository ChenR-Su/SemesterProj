const fs = require('fs')

let toBuild = [
  { dir: "./Engine/Components/", name: "Engine-Components.js" },
  { dir: "./Game/Components/", name: "GameComponents.js" },
  { dir: "./Game/Prefabs/", name: "GamePrefabs.js" },
  { dir: "./Game/Scenes/", name: "GameScene.js" },
]

for (let i = 0; i < toBuild.length; i++) {

  let buildString = "";
  let dir = toBuild[i].dir;
  let buildName = toBuild[i].name;

  function convertCase(kebab) {
    return kebab.split("-").map(i => i[0].toUpperCase() + i.substr(1)).join("");
  }

  let files = fs.readdirSync(dir)

  files.forEach(file => {
    if (file == buildName) return;
    let filename = file.substr(0, file.length - 3);
    buildString += `export {default as ${convertCase(filename)}} from "${"./" + file}"\n`;
  })
  fs.writeFileSync(dir + buildName, buildString);
}