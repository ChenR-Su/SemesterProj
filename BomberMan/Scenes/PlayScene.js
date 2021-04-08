export default{
    name:"PlayScene",
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
      

        {prefabName:"MainController"},
        {prefabName:"Player",x:-36,y:-30},
        {prefabName:"Enemy",x:6,y:18}
        
    ]
}