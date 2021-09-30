    SKETCH FUNC    


    //GAMESTATE 0
    if(gameState===0){
    appform.display();
    background(31, 11, 60)
    }
    player.visible=false
    enemy.visible=false
    water.visible=false
    enemytracker.visible=false
    //GAMESTATE 0




    //GAMESTATE 4
    if(gameState===4){
            //Controls
    player.setVelocity(0,0)

    if(keyDown("UP_ARROW")){
        player.velocityY=-9
    }
    if(keyDown("RIGHT_ARROW")){
        player.velocityX=9
    }
    if(keyDown("DOWN_ARROW")){
        player.velocityY=9
    }
    if(keyDown("LEFT_ARROW")){
        player.velocityX=-9
    }
    //Controls

    //Basic Shapes
    fill("yellow")
    floor=rect(000, 400, 1000, 400)
    //Basic Shapes

    //Interaction
    if(player.isTouching(water)){
        player.mirrorY(1)
        console.log("This is a Detection Message! You are Touching Water")
    }
    enemytracker.x=enemy.x
    enemytracker.y=enemy.y
    if(player.isTouching(enemytracker)){
        enemy.attractionPoint(2,player.x, player.y)
        console.log("player is touching enemy")
    }
    if(enemy.isTouching(player)){
        enemy.setVelocity(0,0)
    }
    //Interaction
    }
    //GAMESTATE4



