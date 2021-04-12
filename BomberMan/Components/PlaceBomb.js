import * as Engine from "../../Engine/Engine.js"



export default class PlaceBomb extends Engine.Component{
    //Determine if bomb can be places depends on numbers of bomb carried
    constructor(gameObject){
        super(gameObject);
        this.amount = 2;
        this.amount2 = 2;
        this.bombs=[];

    }
    update(){
        if((this.gameObject.name == "Player" && Engine.Input.getKeyDown(" ")) && this.amount > 0){
           
            let bomb = Engine.SceneManager.currentScene.instantiate({prefabName: "Bombs",x:this.gameObject.transform.position.x,y:this.gameObject.transform.position.y})

            this.bombs.push(bomb);
            this.amount--;
            //Reference to the bomb created in  order to destory it
        }
        if((this.gameObject.name == "Player2" && Engine.Input.getKeyDown("f")) && this.amount > 0){
           
            let bomb = Engine.SceneManager.currentScene.instantiate({prefabName: "Bombs",x:this.gameObject.transform.position.x,y:this.gameObject.transform.position.y})

            this.bombs.push(bomb);
            this.amount2--;
            //Reference to the bomb created in  order to destory it
        }
       
        for(let i = 0; i < this.bombs.length; i++){
            if(this.bombs[i].getComponent("Explode").bombDestoryed){
                this.bombs.splice(i,1);
                this.amount++;
            }
        }
    }
}