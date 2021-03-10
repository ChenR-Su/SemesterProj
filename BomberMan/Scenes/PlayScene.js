export default{
    name:"PlayScene",
    children:[
        {
            gameObject:{
                name:"MainCamera",
                components:[{name:"WorldCamera"}]
            },sx:10,sy:10
        },
        {
            gameObject:{
                name:"ScreenCamera",
                components:[{name: "ScreenCamera"}],
                children:[]
            }
        },
        {
            gameObject:{
                name: "BackGround",
                components:[
                    {name: "Square", args:[82]},
                    {name: "Draw",args:["silver"]}
                ]
            },x:0,y:0
        },
        /*
        {prefabName:"LeftRightBorderWalls",x:-40},
        {prefabName:"LeftRightBorderWalls",x:40},
        {prefabName:"TopBottomBorderWalls",y:40},
        {prefabName:"TopBottomBorderWalls",y:-40},

        //Middle Vertical Line
        {prefabName:"InnerWall"},
        {prefabName:"Block",y:-6},
        {prefabName:"InnerWall",y:-12},
        {prefabName:"InnerWall",y:-18},
        {prefabName:"InnerWall",y:-24},
        {prefabName:"Block",y:-30},
        {prefabName:"InnerWall",y:-36},
        {prefabName:"Block",y:6},
        {prefabName:"InnerWall",y:12},
        {prefabName:"InnerWall",y:18},
        {prefabName:"InnerWall",y:24},
        {prefabName:"Block",y:30},
        {prefabName:"InnerWall",y:36},

        //Surround Bracket
        {prefabName:"InnerWall",x:-24},
        {prefabName:"InnerWall",x:-30},
        {prefabName:"InnerWall",x:-36},
        {prefabName:"Block",x:-24,y:6},
        {prefabName:"Block",x:-24,y:12},
        {prefabName:"InnerWall",x:-24,y:18},
        {prefabName:"InnerWall",x:-24,y:24},
        {prefabName:"InnerWall",x:-18,y:24},
        {prefabName:"Block",x:-12,y:24},
        {prefabName:"InnerWall",x:-6,y:24},
        {prefabName:"InnerWall",x:6,y:24},
        {prefabName:"Block",x:12,y:24},
        {prefabName:"InnerWall",x:18,y:24},
        {prefabName:"InnerWall",x:24,y:24},
        {prefabName:"InnerWall",x:24,y:18},
        {prefabName:"Block",x:24,y:12},
        {prefabName:"Block",x:24,y:6},
        {prefabName:"InnerWall",x:24},
        {prefabName:"Block",x:24,y:-6},
        {prefabName:"Block",x:24,y:-12},
        {prefabName:"InnerWall",x:24,y:-18},
        {prefabName:"InnerWall",x:24,y:-24},
        {prefabName:"InnerWall",x:18,y:-24},
        {prefabName:"Block",x:12,y:-24},
        {prefabName:"InnerWall",x:6,y:-24},
        {prefabName:"InnerWall",x:-6,y:-24},
        {prefabName:"Block",x:-12,y:-24},
        {prefabName:"InnerWall",x:-18,y:-24},
        {prefabName:"InnerWall",x:-24,y:-18},
        {prefabName:"Block",x:-24,y:-12},
        {prefabName:"Block",x:-24,y:-6},
        {prefabName:"InnerWall",x:-24,y:-24},
        {prefabName:"InnerWall",x:30},
        {prefabName:"InnerWall",x:36},

    //Symbols within the surrouding bracket
        //Left Portion
        {prefabName:"Block",x:-6},
        {prefabName:"InnerWall",x:-12},
        {prefabName:"Block",x:-18},
        {prefabName:"Block",x:-12,y:6},
        {prefabName:"Block",x:-12,y:12},
        {prefabName:"Block",x:-18,y:18},
        {prefabName:"Block",x:-6,y:18},   
        {prefabName:"Block",x:-12,y:-6},
        {prefabName:"Block",x:-12,y:-12},
        {prefabName:"Block",x:-6,y:-18},
        {prefabName:"Block",x:-18,y:-18},     
        //Right Portion
        {prefabName:"Block",x:6},
        {prefabName:"InnerWall",x:12},
        {prefabName:"Block",x:18},
        {prefabName:"Block",x:12,y:6},
        {prefabName:"Block",x:12,y:12},
        {prefabName:"Block",x:18,y:18},
        {prefabName:"Block",x:6,y:18},   
        {prefabName:"Block",x:12,y:-6},
        {prefabName:"Block",x:12,y:-12},
        {prefabName:"Block",x:6,y:-18},
        {prefabName:"Block",x:18,y:-18},

        //Corner Connector
        //UpperLeft
        {prefabName:"Block",x:-30,y:-30},
        {prefabName:"Block",x:-36,y:-36},
        //Upper Right
        {prefabName:"Block",x:36,y:-36},
        {prefabName:"Block",x:30,y:-30},
        //Lower Left
        {prefabName:"Block",x:-36,y:36},
        {prefabName:"Block",x:-30,y:30},
        //Lower Right
        {prefabName:"Block",x:30,y:30},
        {prefabName:"Block",x:36,y:36},
        */
        //Player
        {prefabName:"MainController"},
        {prefabName:"Player"},
        //{prefabName:"LeftRightBorderWalls"}
        
    ]
}