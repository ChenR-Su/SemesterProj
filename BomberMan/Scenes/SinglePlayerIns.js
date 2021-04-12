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
                    },x:850,y:350
                   },
                   {
                    gameObject:{
                        name:"Description",
                        components:[
                            {
                                name:"ScreenText",
                                args:["Use Arror Key for Movement, Space bar to place Bomb, Good Luck Surviving",{color:"white"}]
                            },
                          
                        ]
                    },x:350,y:500
                   },
                   {
                    gameObject:{
                        name:"Continue",
                        components:[
                            {
                                name:"ScreenText",
                                args:["Click Anywhere to Continue",{color:"white"}]
                            },
                        ]
                    },x:750,y:750
                   }
               ]
           }
        }
    ]
}