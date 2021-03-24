export default{
    name: "EndScene",
    children:[
        {
            gameObject:
            {
                name: "SceneController",
                components:[
                    {name:"ChangeScreen"},
                    {name: "SceneCountDown"}
                ]
            }
        },
        {
            gameObject:
            {
                name:"EndText",
                components:[
                    {name:"ScreenText",args:["Thanks for Player, Good Luck in Your Laning Phase in Game of Life"]}
                ]
            },x:100,y:55
        },
        
    ]
}