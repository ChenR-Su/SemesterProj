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
                        },x:100,y:40
                    },
                    {
                        gameObject:{
                            name:"Continue",
                            components:[
                                {
                                    name:"ScreenText",
                                    args:["BomberMan",{color:"white"}]
                                }
                            ]
                        },x:100,y:80
                    }
                ]
            }

        },
    ]


}