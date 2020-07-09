class Game{
    constructor(){}
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
    })
}
    start(){
        player=new Player()
        player.getCount()
        form= new Form()
        form.display()
    }

}