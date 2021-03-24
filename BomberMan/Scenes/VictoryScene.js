export default{
    name: "VictoryScene",
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
                name:"DefeatText",
                components:[
                    {name:"ScreenText",args:["Victory"]}
                ]
            },x:100,y:55
        },
        {
            gameObject:
            {
                name:"Continue",
                components:[
                    {name:"ScreenText",args:["Continue? Y/N"]}
                ]
            },x:100,y:80
        }
    ]
}