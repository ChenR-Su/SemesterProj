export default{
    name:"MultiPlayerScene",
    children:[
        {
            gameObject:{
                name:"MainCamera",
                components:[{name:"WorldCamera"}]
            },sx:8,sy:8
        },
        {
            gameObject:{
                name:"ScreenCamera",
                components:[{name: "ScreenCamera"}],
                children:[
                    {
                        gameObject:{
                            name:"Score",
                            components:[
                                {
                                    name: "ScreenText",
                                    args:["CurrentScore : ",{color:"white"}]
                                }
                            ]
                        },x:650,y:130
                    }
                ]
            },
        },
        {
            gameObject:{
                name: "BackGround",
                components:[
                    {name: "Square", args:[82]},
                    {name: "Draw",args:["silver"]}
                ]
            }
        },
       
      

        //Player
        {prefabName:"MainController"},
        {prefabName:"Player",x:-36,y:-30},
        {prefabName:"Player2",x:36,y:-30},
        {prefabName:"Enemy",x:6,y:18},
        //{prefabName:"LeftRightBorderWalls"}
        
    ]
}