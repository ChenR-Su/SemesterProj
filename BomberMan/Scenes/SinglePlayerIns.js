export default{
    name:"SinglePlayerIns",
    children:[
        {
            gameObject:{
                name: "SceneController",
                components:[
                    {name: "ChangeScene"},
                    {name: "SceneCountDown"}
                ]
            }
        },
        {
            gameObject:{
                name:"MainCamera",
                components:[{name:"WorldCamera"}]
            }
        },
        {
           gameObject:{
               name:"ScreenCamera",
               components:[{name:"ScreenCamera"}],
               children:[
                   {
                    gameObject:{
                        name:"Instruction",
                        components:[
                            {
                                name:"ScreenText",
                                args:["Player Instruction",{color:"white"}]
                            },
                          
                        ]
                    },x:120,y:90
                   }
               ]
           }
        }
    ]
}