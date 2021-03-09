export default{
    name: "LostScene",
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
                    {name:"ScreenText",args:["Defeated"]}
                ]
            },x:100,y:55
        },
        {
            gameObject:
            {
                name:"Continue",
                components:[
                    {name:"ScreenText",args:["Click AnyWhere to Replay"]}
                ]
            },x:100,y:80
        }
    ]
}