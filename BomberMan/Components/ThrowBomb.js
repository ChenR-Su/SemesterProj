import * as Engine from "../../Engine/Engine.js"
export default class ThrowBomb extends Engine.Component{
    //Determine if bomb can be places depends on numbers of bomb carried
    constructor(gameObject){
        super(gameObject);
        this.bombs=[];
        this.countDown = 50;
        this.currX ;
        this.currY ;

    }

    newPosition(){
        do{
            this.currX = Math.floor(Math.random()*73) - 36;
        }while(this.currX % 6 != 0)
        do{
            this.currY = Math.floor(Math.random()*73) - 36;
        }while(this.currY % 6 != 0)
    }
    update(){
        if(this.countDown == 0){
            this.newPosition();
            let bomb = Engine.SceneManager.currentScene.instantiate({prefabName: "EnemyBomb",x:this.currX,y:this.currY})
            this.bombs.push(bomb);
            this.countDown = 50;
            //Reference to the bomb created in  order to destory it
        }
        else{
            this.countDown--;
        }  
        for(let i = 0; i < this.bombs.length; i++){
            if(this.bombs[i].getComponent("EnemyBombExplosion").bombDestoryed){
                this.bombs.splice(i,1);
                this.amount++;
            }
        }
    }
}