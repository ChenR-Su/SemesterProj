export default{
    name:"PlayScene",
    children:[
        {
            gameObject:{
                name:"MainCamera",
                components:[{name:"WorldCamera"}]
            }
        },
        {
            gameObject:{
                name:"ScreenCamera",
                components:[{name: "ScreenCamera"}],
                children:[
                    {
                        gameObject:{
                            name: "BackGround",
                            components:[
                                {name: "Square", args:[500,500]},
                                {name: "Draw",args:[rgba(29,171,126,1)]}
                            ]
                        },x:350,y:350
                    }
                ]
            }
        },
        {prefabName: "Player",x:100,y:100},
        {prefabName: "Block",x:120,y:120},
        {prefabName: "Wall",x:150,y:170},
    ]
}