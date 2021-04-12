export default{
    name: "DefeatScene",
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
                                    args:["Defeated",{color:"white"}]
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
                                    args:["Continue? Y/N",{delay:50,color:"white"}]
                                }
                            ]
                        },x:850,y:500
                    }
                ]
            }

        }
    ]
}