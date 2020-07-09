class Form{
    constructor(){}
    display(){
        var playername=createInput('name')
        playername.position(250,250)
        var playbutton=createButton('PLAY')
        playbutton.position(250,300)
        playbutton.mousePressed(function(){
            var name=playername.value()
            playercount=playercount+1
            player.updateCount(playercount)
            player.update(name)
            playername.hide()
            playbutton.hide()
           
            var greeting=createElement('h2')
            greeting.position(250,250)
            greeting.html("Hi!"+name)
        })
            
    }
}