import * as Engine from "../../Engine/Engine.js"

const SceneManager = Engine.SceneManager;
let wallName = "InnerWall";
let blockName = "Block";

export default class MainController extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
        this.totalBlockGeo = [];
        this.totalWallGeo = [];
        this.playerBomb = [];
        this.enemyBomb = [];
        this.totalWall = [];
        this.totalBlock = [];
        this.currScore = 0;
    }
    start() {
        this.player = SceneManager.currentScene.getGameObject("Player");
        this.player2 = SceneManager.currentScene.getGameObject("Player2");
        this.enemy = SceneManager.currentScene.getGameObject("Enemy");
        SceneManager.currentScene.instantiate({ prefabName: "LeftRightBorderWalls", x: 40 });
        SceneManager.currentScene.instantiate({ prefabName: "LeftRightBorderWalls", x: -40 });
        SceneManager.currentScene.instantiate({ prefabName: "TopBottomBorderWalls", y: 40 });
        SceneManager.currentScene.instantiate({ prefabName: "TopBottomBorderWalls", y: -40 });
        this.mapGeneration();
 
    }

    mapGeneration(){
        this.middleCross();
        this.surroundingBracket();
        this.diagnol();
    }

    middleCross() {
        for(let x = -36; x<=36;x+=6){
            for(let y = -36; y<=36;y+=6){
                let ypos = Math.abs(y);
                let xpos = Math.abs(x);
                if((ypos == 0 || xpos ==0) && (xpos != 6 && ypos != 6) && (xpos != 30 && ypos != 30)){
                    this.totalWall.push(SceneManager.currentScene.instantiate({ prefabName: wallName, x:x,y: y }));
                    this.totalWallGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }       
                else if(ypos == 0 || xpos ==0){
                    this.totalBlock.push(SceneManager.currentScene.instantiate({prefabName: blockName, x:x,y: y }));
                    this.totalBlockGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }     
                else if((xpos <=24 && ypos <=24)&&(ypos >= 24 || xpos >= 24) && (ypos != 6 && xpos!=0))
                {
                    this.totalBlock.push(SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y }));
                    this.totalBlockGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }
            }
        }
    }

    surroundingBracket() {
        for(let x = -24; x<=24;x+=6){
            for(let y = -24; y<=24;y+=6){
                let ypos = Math.abs(y);
                let xpos = Math.abs(x);
                let range = Boolean(ypos >= 24 || xpos >= 24)
                let corner = Boolean((xpos == 24 || xpos == 18) && (ypos == 24 || ypos == 18))
                let lineCross = Boolean(ypos != 6 && xpos!=0)
                if(range && lineCross && !corner){
                    this.totalBlock.push(SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y }));
                    this.totalBlockGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }            
                else if(range && lineCross && corner){
                    SceneManager.currentScene.instantiate({ prefabName: wallName, x:x,y: y });
                    this.totalWallGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }
            }
        }
    }

    diagnol(){
        for(let x = -36; x<=36;x+=6){
            for(let y = -36; y<=36;y+=6){
                let ypos = Math.abs(y);
                let xpos = Math.abs(x);
                let overlap = Boolean(xpos == 24 || ypos ==24 || xpos == 0 || ypos == 0);
                let first = Boolean(xpos == 12|| ypos == 12)
                if(xpos == ypos && !overlap && !first){
                    this.totalBlock.push(SceneManager.currentScene.instantiate({ prefabName: blockName, x:x,y: y }));
                    this.totalBlockGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }
                else if(xpos == ypos && !overlap && first){
                    SceneManager.currentScene.instantiate({ prefabName: wallName, x:x,y: y });
                    this.totalWallGeo.push(new Engine.EngineGeo.SquareGeo(x,y,5,5));
                }
                   
            }
        }
    }

    update() {
        let score = SceneManager.currentScene.getGameObject("Score");
        score.getComponent("ScreenText").string = ("Current Score :" + this.currScore)
        this.gameObject.getComponent("ChangeScene").next();
        this.enemyBomb = this.enemy.getComponent("ThrowBomb").bombs;
        if(this.player){
            this.playerBomb = this.player.getComponent("PlaceBomb").bombs;
            let playerX = this.player.transform.position.x;
            let playerY = this.player.transform.position.y;
            this.explosionCheck();
            if(playerX >= 36)
                this.player.transform.position.x = 36;
            if(playerX <= -36)
                this.player.transform.position.x = -36;
            if(playerY >= 36)
                this.player.transform.position.y = 36;
            if(playerY <= -36)
                this.player.transform.position.y = -36;  
           
            if(Engine.Input.getKey("ArrowLeft")){
                if(!this.collDect()){
                    this.storePosition();
                    this.player.transform.position.x -= 1 * this.player.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();  
            }
            if(Engine.Input.getKey("ArrowRight")){
                if(!this.collDect()){
                    this.storePosition();
                    this.player.transform.position.x += 1 * this.player.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();
            }
            if(Engine.Input.getKey("ArrowUp")){
                if(!this.collDect()){
                    this.storePosition();
                    this.player.transform.position.y -= 1 * this.player.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();
            }
            if(Engine.Input.getKey("ArrowDown")){
                if(!this.collDect()){
                    this.storePosition();
                    this.player.transform.position.y += 1 * this.player.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();
            }
        }
        if(this.player2){
            this.playerBomb = this.playerBomb.concat(this.player2.getComponent("PlaceBomb").bombs);
            let player2X = this.player2.transform.position.x;
            let player2Y = this.player2.transform.position.y;
            this.explosionCheck();
            if(player2X >= 36)
                this.player2.transform.position.x = 36;
            if(player2X <= -36)
                this.player2.transform.position.x = -36;
            if(player2Y >= 36)
                this.player2.transform.position.y = 36;
            if(player2Y <= -36)
                this.player2.transform.position.y = -36;  
           
            if(Engine.Input.getKey("a")){
                if(!this.collDectPlayer2()){
                    this.storePosition();
                    this.player2.transform.position.x -= 1 * this.player2.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();  
            }
            if(Engine.Input.getKey("d")){
                if(!this.collDectPlayer2()){
                    this.storePosition();
                    this.player2.transform.position.x += 1 * this.player2.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();
            }
            if(Engine.Input.getKey("w")){
                if(!this.collDectPlayer2()){
                    this.storePosition();
                    this.player2.transform.position.y -= 1 * this.player2.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();
            }
            if(Engine.Input.getKey("s")){
                if(!this.collDectPlayer2()){
                    this.storePosition();
                    this.player2.transform.position.y += 1 * this.player2.getComponent("MovePlayer").speed;
                }
                else
                    this.setPosition();
            }
        }
    }
    storePosition(){
        if(this.player){
            this.player.getComponent("MovePlayer").nonCollideX = this.player.transform.position.x;
            this.player.getComponent("MovePlayer").nonCollideY = this.player.transform.position.y;
        }
        
        if(this.player2){
            this.player2.getComponent("MovePlayer").nonCollideX = this.player2.transform.position.x;
            this.player2.getComponent("MovePlayer").nonCollideY = this.player2.transform.position.y;
        }
    }
    setPosition(){
        if(this.player){
            this.player.transform.position.x = this.player.getComponent("MovePlayer").nonCollideX;
            this.player.transform.position.y = this.player.getComponent("MovePlayer").nonCollideY;
        }
        if(this.player2){
            this.player2.transform.position.x = this.player2.getComponent("MovePlayer").nonCollideX;
            this.player2.transform.position.y = this.player2.getComponent("MovePlayer").nonCollideY;
        }
        
    }
    explosionCheck(){
        for(let i = 0; i<this.totalBlockGeo.length;i++){
            for(let pb of this.playerBomb){
                if(pb.getComponent("Explode").currBomb){
                    if(Engine.EngineGeo.Collision.collisionDect(pb.getComponent("Explode").currBomb.getComponent("Cross").asGeometry(),this.totalBlockGeo[i])){
                        this.totalBlockGeo.splice(i,1);
                        let currblock = this.totalBlock[i];
                        this.totalBlock.splice(i,1);
                        currblock.destroy();
                        this.currScore+=10;
                    }
                   
                }
                   
            }
        }
        for(let eb of this.enemyBomb){
            if(eb.getComponent("EnemyBombExplosion").currBomb){
                if(this.player){
                    if(Engine.EngineGeo.Collision.collisionDect(eb.getComponent("EnemyBombExplosion").currBomb.getComponent("Cross").asGeometry(),this.player.getComponent("Square").asGeometry())){
                        
                        this.player.destroy();
                    }
                }
                if(this.player2){
                    if(Engine.EngineGeo.Collision.collisionDect(eb.getComponent("EnemyBombExplosion").currBomb.getComponent("Cross").asGeometry(),this.player2.getComponent("Square").asGeometry())){
                        this.player2.destroy();
                    }
                }
                if(this.player || this.player2)
                    this.currScore++;
               
                    
            }      
        }
        for(let pb of this.playerBomb){
            if(pb.getComponent("Explode").currBomb){
                if(Engine.EngineGeo.Collision.collisionDect(pb.getComponent("Explode").currBomb.getComponent("Cross").asGeometry(),this.enemy.getComponent("Square").asGeometry())){
                    this.enemy.destroy();
                }
            }
        }
    }
    collDect(){
        let store;

        for(let walls of this.totalWallGeo){
            store = Engine.EngineGeo.Collision.collisionDect(this.player.getComponent("Square").asGeometry(),walls);
            if(store)
                return store
        }
        for(let block of this.totalBlockGeo){
            store = Engine.EngineGeo.Collision.collisionDect(this.player.getComponent("Square").asGeometry(),block);
            if(store)
                return store
        }


        return false;
    }
    collDectPlayer2(){
        let store;
        for(let walls of this.totalWallGeo){
            store = Engine.EngineGeo.Collision.collisionDect(this.player2.getComponent("Square").asGeometry(),walls);
            if(store)
                return store
        }
        for(let block of this.totalBlockGeo){
            store = Engine.EngineGeo.Collision.collisionDect(this.player2.getComponent("Square").asGeometry(),block);
            if(store)
                return store
        }
        return false;
    }
}