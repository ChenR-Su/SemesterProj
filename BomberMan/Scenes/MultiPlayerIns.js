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
                name:"Instruction",
                components:[
                    {name:"ScreenText",args:["Player Instruction:\nPlayer one -> \nUse Arrow Key to Move your Character, Space bar to place a bomb\nPlayer Two ->\nUse W,S,A,D Key to Move your Character, F key to place a bomb"]},
                    {name:"ScreenText",args:["Bomb will explode after a couple second, use the explosion to destory your enemy, white bricks are breakable, however, red bricks are rock solid, Good Luck\n"]},
                    {name:"ScreenText",args:["Click anywhere to continue"]}
                ]
            }
        }
    ]
}