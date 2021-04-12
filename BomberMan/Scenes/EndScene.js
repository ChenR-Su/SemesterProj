export default{
    name: "EndScene",
    children:[
        {
            gameObject:
            {
                name: "SceneController",
                components:[
                    {name:"ChangeScene"},
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
                                    args:["Thanks for Playing",{color:"white"}]
                                }
                            ]
                        },x:800,y:350
                    }     
                ]
            }
        } 
    ]
}