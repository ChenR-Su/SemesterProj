export default{
    name: "InitialScene",
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
                        gameObject: {
                            name:"Title",
                            components:[
                                {
                                    name:"ScreenText",
                                    args:["BomberMan",{color:"white"}]
                                }
                            ]
                        },x:900,y:350
                    },
                    {
                        gameObject:{
                            name:"Continue",
                            components:[
                                {
                                    name:"ScreenText",
                                    args:["Click 1 on Number Pad for Single Player, 2 for Multi Player(Only up to 2 Players)",{delay:50,color:"white"}]
                                }
                            ]
                        },x:800,y:500
                    }
                ]
            }

        }
    ]


}