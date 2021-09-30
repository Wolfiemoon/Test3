//const items = [knife, weapon];

//const { group } = require("console");

//const { text } = require("stream/consumers");

//const { text } = require("stream/consumers");



const items = ['knife', 'necklace', 'scarf', 'stick', 'heartpiece', '???'];

var Silfer=100


//Fusion Diolugue
fusiontext=0

//Shopkeepers Diologue

//???
shopkeepdio=0


//var diologue=0
talkval=0
var intro=1
var battlemode=3
var voidwor=5
var flippedlever=6
var gameover=0
var shop=2

//??? Shop GameStates
var buy =2.1


var pressStart;
//Sound Picker
var BasicBattleTheme=20
var jukebox=20


//Healthbars 
var playerhp=100

var deaths=0

var gameState=2
var bulletGroup


function preload(){
down=loadAnimation("Down1.png", "Down2.png", "Down3.png", "Down4.png")
up = loadAnimation("Up1.png", "Up2.png","Up3.png","up4.png")
right = loadAnimation("Right1.png","Right2.png")
left = loadAnimation("Left1.png", "Left2.png")
VoidCit1 = loadImage("KkgLeverLeft.png")
LeverFlip = loadImage("BkgLeverRight.png")
pressStart = loadFont("PressStart2P-Regular.ttf")
SongOfTheVoid = loadSound("Void.wav")
battleTheme = loadSound("Basic Battle.wav")
stairImg = loadImage("Stairs.png")
pinkwolfidle=loadAnimation("IdleEnemyF1.png", "IdleEnemyF2.png")
fuseridle=loadImage("FuserIdle.png")
fuserSpeak=loadAnimation("FuserSpeakF1.png", "FuserSpeakF2.png")
shopkeeperIdle=loadAnimation("ShopKeeper1.png", "ShopKeeper2.png", "ShopKeeper3.png", "ShopKeeper2.png")

//VoidCit2 = loadImage("")
//left=loadAnimation("Left1.png", "Left2.png")



//Animation

//Sounds

//PNG FILES
//
}

function setup() {
	createCanvas(windowWidth, windowHeight);

    bulletGroup =new Group()



    //water=createSprite(400,500,100,150)
    //water.shapeColor="blue"
    Guide=createSprite(350,500, 10, 100)
    Guide.shapeColor="orange"
    player=createSprite(500,500,50,50)
    player.addAnimation("down", down)
    player.addAnimation("left", left)
    player.addAnimation("right", right)
    player.addAnimation("up", up)
    player.scale=5

    //FIGURE 1 (Friendly Npc)
    Figure1=createSprite(-30, 100, 50, 100)
    
    //Maintheme
    //SongOfTheVoid.loop();
    //battleTheme.loop()


    //water=createSprite(500, 650, 300, 100)

    reflection=createSprite(player.x, player.y, 50,50)
    reflection.addAnimation("down", down)
    reflection.addAnimation("left", left)
    reflection.addAnimation("right", right)
    reflection.addAnimation("up", up)
    reflection.scale=5
    reflection.visible=false
    playerColid=createSprite(player.x, player.y, player.width/2+20, 120)
    playerColid.visible=false
    //FIGURE 2(HOODED)
    figure2=createSprite(750, 400, 500, 500)
    figure2.scale=0.3
    figure2.addAnimation("pinkwolfidle", pinkwolfidle)
    figure2.changeAnimation("pinkwolfidle")
    figure2.frameDelay = 15

    figure2.visible=false

    //battleTheme.play()
    //enemy=createSprite(500, 500, 50,50)
    //enemy.shapeColor="red"
    //enemytracker=createSprite(enemy.x, enemy.y,150,150)
    //battle=new Battle();
    //appform=new Form();
    
    
    
    //if(jukebox==20){
    //    battleTheme.play()
    //}

    //PlayerHpSetup
    hpbaroutline=createSprite(player.x,player.y-90, 110, 30)
    hpbaroutline.shapeColor="white"

    redhpbar=createSprite(player.x, player.y, 100, 20)
    redhpbar.shapeColor="red"
    
    playerhealthbar=createSprite(player.x, player.y-20, playerhp, 20)
    playerhealthbar.shapeColor="lime"


    //Fuser
    bot=createSprite(120,300,80,120)
    bot.shapeColor="blue"
    bot.addAnimation("FuserSpeak", fuserSpeak)
    bot.addAnimation("FuserIdle", fuseridle)
    bot.scale=5.5
    bot.visible=false
    bot.changeAnimation("FuserIdle")

    //Shopkeeper
    shopkeeper=createSprite(windowWidth/2-70, 200, 50,50)
    shopkeeper.depth=-20
    shopkeeper.addAnimation("shopkeeperIdle", shopkeeperIdle)
    shopkeeper.scale=0.2
    shopkeeper.frameDelay=10
    shopkeeper.visible=false










}


function draw() {  

    //Healthbar follows player
    playerhealthbar.x=player.x
    playerhealthbar.y=player.y-90
    hpbaroutline.x=player.x
    hpbaroutline.y=player.y-90
    redhpbar.x=player.x
    redhpbar.y=player.y-90
    playerhealthbar.width=playerhp
    textSize(15)
        //Text
        textSize(30)
        textFont(pressStart)
        
        noFill()
        stroke("green")
        text(playerhp + "/100", 20,20)



    //Font
    textFont(pressStart)
        //Gamestate5
    if(gameState==5){
        
    background(VoidCit1);
        
    //text("talkval:" + talkval, 100, 50)
        
    if(player.x < 350){
    Figure1.attractionPoint(0.1, 250, 100)
    }
    if(Figure1.x > 150){
        Figure1.setVelocity(0,0)
        textbox()
        textSize(12)
        text("Hello Distant Traveler...", 650, 600)
        }
    }
    text("Position of Figure1:" + Figure1.x + "," + Figure1.y, 100, 100)
    //Gamestate 5
    








    if(gameState==6){
    background(LeverFlip)
    textSize(12)
    //Moving Stairs
    stair=createSprite(455,388,500,500)
    stair.addImage(stairImg)
    stair.scale=1.8
    collider4str=createSprite(stair.x+0, stair.y+50, 550, 20)
    collider4str.rotation=45
    collider4str.visible=false
    player.collide(collider4str)
    if(player.x < 0){
        gameState=7
    }    
    

    //Interaction
    if(player.isTouching(Figure1)){
    textbox()
    textSize(15)
    text("We Have to leave...", 700,600)


    }
    







    }



    //////SHOP///////
    if(gameState==2){
    background(247, 137, 64)
    shopkeeper.visible=true

    //Polka dot pattern
    fill(255, 174, 124)
    noStroke()


 // circle properties
 fill(255, 174, 124);
 noStroke();
 var diameter = 50;
 for (var i=0; i<width/diameter; i=i+1) {
 for (var j=0; j<height/diameter; j=j+1) {
 ellipse(
 diameter/2 + i * diameter,
diameter/2 + j * diameter,
 // applying a different
//animation to each circle
 diameter * noise(frameCount/100 +
j*10000 + i*10000),
 // applying a different
//animation to each circle
 diameter * noise(frameCount/100 +
j*10000 + i*10000)
 );
 }
 }


    player.visible=false
    playerhealthbar.visible=false
    hpbaroutline.visible=false
    redhpbar.visible=false
    Guide.visible=false
    //Shop menu
    fill("black")
    stroke(255)
    strokeWeight(5)
    rect(200,400, 700, 320)
    
    //Side Nav buttons
    rect(900,400, 250,80)
    rect(900,480, 250,80)
    rect(900,560, 250,80)
    rect(900,640, 250,80)




//Text(Final Layer)
noStroke()
fill(255)
//shopkeeper.looped=true
text("Hello Travelers", 330,550)

//Nav Bar txt
text("Buy", 980, 455)
buy=createSprite(1025,445,120,50)
text("Sell", 970, 535)
sell=createSprite(1027,520,120,50)
text("talk", 965, 615)
talk=createSprite(1025,600,120,50)
text("leave", 950, 695)
leave=createSprite(1025,680,160,50)

//mouse is over functions
if(mouseIsOver(buy)){
fill("yellow")
text("Buy",980,455)
}
buy.visible=false
if(mouseIsOver(sell)){
    fill("yellow")
    text("Sell",970,535)
    }
sell.visible=false
    if(mouseIsOver(talk)){
        fill("yellow")
        text("talk",965,615)
        }
talk.visible=false
        if(mouseIsOver(buy)){
            fill("yellow")
            text("Buy",980,455)
            }
leave.visible=false
        if(mouseIsOver(leave)){
            fill("yellow")
            text("leave", 950, 695)
        }

//Mouse Pressed Functions
if(mousePressedOver(buy)){
gameState=2.1
}





}

//Gamestate 2.1 Shop(buy)
if(gameState==2.1){
    background(247, 137, 64)
    shopkeeper.visible=true

    //Polka dot pattern
    fill(255, 174, 124)
    noStroke()


 // circle properties
 fill(255, 174, 124);
 noStroke();
 var diameter = 50;
 for (var i=0; i<width/diameter; i=i+1) {
 for (var j=0; j<height/diameter; j=j+1) {
 ellipse(
 diameter/2 + i * diameter,
diameter/2 + j * diameter,
 // applying a different
//animation to each circle
 diameter * noise(frameCount/100 +
j*10000 + i*10000),
 // applying a different
//animation to each circle
 diameter * noise(frameCount/100 +
j*10000 + i*10000)
 );
 }
 }


    player.visible=false
    playerhealthbar.visible=false
    hpbaroutline.visible=false
    redhpbar.visible=false
    Guide.visible=false
    //Shop menu
    fill("black")
    stroke(255)
    strokeWeight(5)
    rect(200,400, 700, 320)
    


//Text(Final Layer)
noStroke()
fill(255)
//shopkeeper.looped=true
text("What items would ", 300,550)
text("you like to buy..?", 280,590)

//Item list

//Block options
stroke("white")
fill("black")
rect(900,320, 370,80)
rect(900,400, 370,80)
rect(900,480, 370,80)
rect(900,560, 370,80)
rect(900,640, 370,80)
//Text over blocks
noStroke()
fill("white")
text("Sword",1015,375)
text("Cinnaswirl",940,455)
text("Bunchilla", 950,535)
text("Knitting Set", 908,615)
text("Exit", 1030, 695)
//Interaction Button
sword=createSprite(1090,358, 150,50)
sword.visible=false
cinnaswirl=createSprite(1090,438,300,50)
bunchilla=createSprite(1083,518,266,50)
knittingset=createSprite(1086,598,355,50)
exit=createSprite(1090,678,150,50)
//Status Blocks
stroke(255)
fill(0)


//Interactions

//Sword

//Mouse Over
if(mouseIsOver(sword)){
rect(1270,320, 240,400)
fill(255)
noStroke()
text("Sword",1315,360)
textSize(12)
text("Type: Long Sword",1293,380)
text("Dmg:+67",1350,400)

//Goldify Text
fill("Yellow")
textSize(30)
text("Sword",1015,375)
}

//Mouse Press
if(mousePressedOver(sword)){
    items.push("Sword")
}



//Mouse Over
cinnaswirl.visible=false
if(mouseIsOver(cinnaswirl)){
    rect(1270,320, 240,400)
    fill(255)
    noStroke()
    text("Cinna",1315,360)
    textSize(12)
    text("Type: Swril",1325,380)
    text("Recovers 60 Hp",1310,400)
    
    //Goldify Text
    fill("Yellow")
    textSize(30)
    text("Cinnaswirl",940,455)
    }
    
    //Mouse Press
    if(mousePressedOver(cinnaswirl)){
        items.push("CinnaSwirl")
        
    }
    


























//INVENTORY
stroke(255)
fill(0)
text("Inventory:", 200, 50)
      textSize(15)
text(items[1], 280,90)
text(items[2], 280,130)
text(items[3], 280,170)
text(items[4], 280,210)
text(items[5], 280,250)
text(items[6], 280,290)
text(items[7], 280,310)
text(items[8], 280,340)


















//Y= @$) ===False...



}



















    //BATTLE MODE
    if(gameState==3){
        background(0)
        background(0)
        Guide.visible=false
        figure2.visible=true
        player.visible=true
        player.setVelocity(0,0)
        player.depth=+20
        

                    bullet()
        if(player.isTouching(bulletGroup)){
            playerhp=playerhp-1
            textSize(12)
            //stroke("red")
            text("-10 Hp", player.x-35, player.y-120)
        }
    
    
        //gameoverbutto=createSprite(200,500,50,50)
        //if(player.isTouching(gameoverbutto)){
        //    playerhp=playerhp-100
        //    deaths=deaths+1
        //
        //}
        

    //cube=createSprite(500,500,50,100)
    //cube.rotation=player.x - cube.x - player.height/2, player.y - cube.y - player.widtg/2
    //player.rotation=cube.x - player.x - cube.height/2, cube.y - player.y - cube.widtg/2

    playerhealthbar.visible=true
    hpbaroutline.visible=true
    redhpbar.visible=true




    }
   //Battle Mode

   //gamestate 






   if(gameState===7){
    background("grey")
    bot.visible=true

    //Fuser Diolugue
    if(keyDown("ENTER") && player.isTouching(bot)){
    fusiontext=1
    }


    player.depth=+100
}

//if(fusiontext=1){
//    bot.changeAnimation("FuserSpeak")
//    textbox()
//    textSize(20)
//    text("Hello World..", 700, 600)
//    fill("white")
//}






//if(keyDown("1")){
    //items.push("bun");
//}

//console.log(items[1,2,3,4,5])





    playerColid.x=player.x
    playerColid.y=player.y


    //GAME OVER SCREEN
    if(playerhp < 0){
        gameState=0
    }
    if(gameState==0){
        background(0)

        //noFill()
        noFill()
        textSize(19)
        stroke("purple")
        strokeWeight(1)
        text("Yes", 530, 550)
        //yesopt=createSprite(550,150, 5000,50)
        //yesopt.visible=true
        //if(mousePressedOver(yesopt)){
        //    gameState=3
        //    playerhp=100
        //    player.visible=true
        //    player.x=500
        //    player.y=500
        //}
        //if(mouseIsOver(yesopt)){
        //    stroke("white")
        //    text("Yes", 530, 550)
        //}
        //yesopt.shapeColor="red"






        fill("white")
        textSize(50)
        text("GAMEOVER", 550, 200)
        console.log(deaths)
        textSize(20)
        if(deaths==1){
        text("You may have lost once, but you can try again.", 300, 300)
        }

        if(deaths==2){
            text("You can always try again.", 500, 300)
            }
            
        if(deaths==3){
            text("Your going to get through it.", 460, 300)
            }
                
        if(deaths==4){
            text("Stay Determined", 480, 300)
            }
                
        if(deaths > 5){
            text("Don't give up!", 500, 300)
            }
                    

        text("It seems that your journey has ended...", 380, 250)
        
        text("Try Again...?", 610, 450)

        

        player.visible=false
        Figure1.visible=false
        figure2.visible=false
        playerhealthbar.visible=false
        redhpbar.visible=false
        hpbaroutline.visible=false
        gameoverbutto.visible=false
    }









    console.log("gameState=" + gameState)


    //fill("blue")
    //text("350 X", 350, 440)


    //REFLECTION
    //reflection.mirrorY(-1)
    //player.collide(water)
    //if(reflection.isTouching(water)){
    //reflection.visible=true    
    //} else {
    //    reflection.visible=false
    //}

    //reflection.x=player.x
    //reflection.y=player.y+160



    
    player.debug=true
    
    //player.mirrorY(-1)

    //DEFAULT OPTIONS FOR PLAYER
    player.setVelocity(0,0)
    player.frameDelay = 15

    if(keyDown("UP_ARROW")){
        player.changeAnimation("up", up)
        player.velocityY=-5
        reflection.changeAnimation("up", up)
    }
    if(keyDown("RIGHT_ARROW")){
        player.changeAnimation("right", right)
        player.velocityX=5
        reflection.changeAnimation("right", right)
    }
    if(keyDown("DOWN_ARROW")){
        player.changeAnimation("down", down)
        player.velocityY=5
        reflection.changeAnimation("down", down)
    }
    if(keyDown("LEFT_ARROW")){
        player.changeAnimation("left", left)
        player.velocityX=-5
        reflection.changeAnimation("left", left)
    }
    
    //SPRINT
    if(keyDown("UP_ARROW" && "SHIFT")){
        player.changeAnimation("up", up)
        player.velocityY=-10
        reflection.changeAnimation("up", up)
    }
    if(keyDown("RIGHT_ARROW")){
        player.changeAnimation("right", right)
        player.velocityX=5
        reflection.changeAnimation("right", right)
    }
    if(keyDown("DOWN_ARROW")){
        player.changeAnimation("down", down)
        player.velocityY=5
        reflection.changeAnimation("down", down)
    }
    if(keyDown("LEFT_ARROW")){
        player.changeAnimation("left", left)
        player.velocityX=-5
        reflection.changeAnimation("left", left)
    }
    
    
    drawSprites();
    
}


    

function textbox(){
        fill(0)
        blackbox=rect(windowWidth/2-240, 500, 600, 200)
        fill("white")
        
        //Edges
        noStroke();
        rect(windowWidth/2-240, 500, 10, 200)
        rect(windowWidth/2+350, 500, 10, 200)
        rect(windowWidth/2-240, 500, 600, 10)
        rect(windowWidth/2-240, 700, 600, 10)

        Next=createSprite(1100, 680, 20, 20)

        //Text
        textSize(30)
        textFont(pressStart)
        
        //noFill()
        //stroke("green")
        //text(playerhp + "/100", 20,20)

        //Interactive Clicking
        textSize(12)
//        if(keyDown("ENTER")){
//        talkval=talkval+1
//        }
//        if(talkval==1){
//            text("It is Nice to meet you...", 100, 100)
//        }
//        if(talkval==2){
//            text("You new to this area...?", 100, 100)
//        }
//        if(talkval==3){
//            text("Oh, thats Interesting.", 100, 100)
//        }
//        if(talkval==4){
//            text("I will flip this lever and you can come Up...", 100, 100)
//        }
//        if(talkval==4 && keyDown("ENTER")){
//        gameState=6
//        talkval=talkval+1
//        }
//        if(talkval==5){
//        text
//        }

    }
//function gswap(){
//    if (frameCount%300===0){
//      bullets.destroy()
//}
//}

function bullet(){
    if (frameCount%15===0){
        bullets =createSprite(850, 0, 50, 50)
        bullets.velocityY =+15
        bullets.x =Math.round(random(0, 1000))
        bulletGroup.add(bullets)
      if(bullets.isTouching(player)){
          playerhp=playerhp-100
      }
    }
}