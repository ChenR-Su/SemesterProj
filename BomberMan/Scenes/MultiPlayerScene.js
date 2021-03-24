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
                children:[]
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
        {prefabName:"Player"},
        {prefabName:"Player2"}
        //{prefabName:"LeftRightBorderWalls"}
        
    ]
}