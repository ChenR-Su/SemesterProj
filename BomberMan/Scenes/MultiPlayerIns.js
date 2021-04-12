export default{
    name:"MultiPlayerIns",
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
                    },x:800,y:150
                   },
                   {
                    gameObject:{
                        name:"P1Description",
                        components:[
                            {
                                name:"ScreenText",
                                args:["Player 1:Use Arror Key for Movement, Space bar to place Bomb",{color:"white"}]
                            },
                          
                        ]
                    },x:350,y:300
                   },
                   {
                    gameObject:{
                        name:"P2Description",
                        components:[
                            {
                                name:"ScreenText",
                                args:["Player 2:Use WSAD Key for Movement, F key to place Bomb",{color:"white"}]
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
                                args:["Click Anywhere to Continue, Good Luck Suriving",{color:"white"}]
                            },
                        ]
                    },x:550,y:750
                   }
               ]
           }
        }
    ]
}