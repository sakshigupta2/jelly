var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg, bgImg;
var bheam, bheamImg;
var gameOver, restart;
var score;
var laddooGroup, laddoImage;
var Jelly1, Jelly2, Jelly3, Jelly4, Jelly5, Jelly6;
var witch, witchImg;


function preload() {
    
    bgImg = loadImage("bg4.jpg");
    laddoImage = loadImage("Face6.png");
    bheamImg = loadImage("Run (10).png");
    gameOverImg = loadImage("gameover.png");
    restartImg = loadImage("restart.png");
    Jelly1Img = loadImage("Jelly (1).png");
    Jelly2Img = loadImage("Jelly (2).png");
    Jelly3Img = loadImage("Jelly (3).png");
    Jelly4Img = loadImage("Jelly (4).png");
    Jelly5Img = loadImage("Jelly (5).png");
    Jelly6Img = loadImage("Jelly (6).png");
    Jelly8Img = loadImage("Jelly (6).png");
    Jelly9Img = loadImage("Jelly (6).png");
    Jelly10Img = loadImage("Jelly (6).png");
    Jelly11Img = loadImage("Jelly (6).png");
    Jelly12Img = loadImage("Jelly (6).png");
    Jelly13Img = loadImage("Jelly (6).png");
    Jelly14Img = loadImage("Jelly (6).png");
    Jelly15Img = loadImage("Jelly (6).png");
    Jelly16Img = loadImage("Jelly (6).png");
    Jelly17Img = loadImage("Jelly (6).png");
    Jelly18Img = loadImage("Jelly (6).png");
    Jelly19Img = loadImage("Jelly (6).png");
    Jelly20Img = loadImage("Jelly (6).png");
    Jelly21Img = loadImage("Jelly (6).png");
    witchImg = loadImage("mush.png");


}

function setup() {
    createCanvas(600, 400);

    bg = createSprite(400,400,10,10);
    bg.addImage(bgImg);
        

    bheam = createSprite(100, 300);
    bheam.addImage(bheamImg);
    bheam.scale = 0.3;

    witch = createSprite(200, 0);
    witch.addImage(witchImg);
    witch.scale = 0.8;
    witch.velocityY = 0.7;

    laddooGroup = createGroup();

    gameOver = createSprite(300, 240);
    gameOver.addImage(gameOverImg);

    restart = createSprite(300, 340);
    restart.addImage(restartImg);

    gameOver.scale = 0.4;
    restart.scale = 0.4;

    gameOver.visible = false;
    restart.visible = false;

    Jelly1 = createSprite(35,30,10,10);
    Jelly1.addImage(Jelly1Img);
    Jelly1.scale = 0.16;

    Jelly2 = createSprite(110,30,10,10);
    Jelly2.addImage(Jelly2Img);
    Jelly2.scale = 0.16;

    Jelly3 = createSprite(185,30,10,10);
    Jelly3.addImage(Jelly3Img);
    Jelly3.scale = 0.16;

    Jelly4 = createSprite(260,30,10,10);
    Jelly4.addImage(Jelly4Img);
    Jelly4.scale = 0.16;

    Jelly5 = createSprite(340,30,10,10);
    Jelly5.addImage(Jelly5Img);
    Jelly5.scale = 0.16;

    Jelly6 = createSprite(420,30,10,10);
    Jelly6.addImage(Jelly6Img);
    Jelly6.scale = 0.16;


    Jelly8 = createSprite(35,90,10,10);
    Jelly8.addImage(Jelly1Img);
    Jelly8.scale = 0.16;

    Jelly9 = createSprite(110,90,10,10);
    Jelly9.addImage(Jelly4Img);
    Jelly9.scale = 0.16;

    Jelly10 = createSprite(185,90,10,10);
    Jelly10.addImage(Jelly6Img);
    Jelly10.scale = 0.16;

    Jelly11 = createSprite(260,90,10,10);
    Jelly11.addImage(Jelly5Img);
    Jelly11.scale = 0.16;

    Jelly12 = createSprite(340,90,10,10);
    Jelly12.addImage(Jelly2Img);
    Jelly12.scale = 0.16;

    Jelly13 = createSprite(420,90,10,10);
    Jelly13.addImage(Jelly3Img);
    Jelly13.scale = 0.16;

    Jelly14 = createSprite(500,90,10,10);
    Jelly14.addImage(Jelly5Img);
    Jelly14.scale = 0.16;

    Jelly15 = createSprite(35,150,10,10);
    Jelly15.addImage(Jelly4Img);
    Jelly15.scale = 0.16;
          
    Jelly16 = createSprite(110,150,10,10);
    Jelly16.addImage(Jelly6Img);
    Jelly16.scale = 0.16;
          
    Jelly17 = createSprite(185,150,10,10);
    Jelly17.addImage(Jelly1Img);
    Jelly17.scale = 0.16;
          
    Jelly18 = createSprite(260,150,10,10);
    Jelly18.addImage(Jelly2Img);
    Jelly18.scale = 0.16;
          
    Jelly19 = createSprite(340,150,10,10);
    Jelly19.addImage(Jelly5Img);
    Jelly19.scale = 0.16;
          
    Jelly20 = createSprite(420,150,10,10);
    Jelly20.addImage(Jelly4Img);
    Jelly20.scale = 0.16;
          
    Jelly21 = createSprite(500,150,10,10);
    Jelly21.addImage(Jelly6Img);
    Jelly21.scale = 0.16;
       
    score = 0;


}

function draw() {
    background(rgb(51,255,51));

    bheam.x = World.mouseX;
    
    createEdgeSprites();

    if (gameState === PLAY) {

    
        if (keyDown("space")) {
            createBullet(bheam.x);
        }

        if (laddooGroup.isTouching(Jelly1)){
            Jelly1.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly2)){
            Jelly2.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly3)){
            Jelly3.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly4)){
            Jelly4.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly5)){
            Jelly5.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly6)){
            Jelly6.destroy();
            score = score +2;
        }
        
        if (laddooGroup.isTouching(Jelly8)){
            Jelly8.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly9)){
            Jelly9.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly10)){
            Jelly10.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly11)){
            Jelly11.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly12)){
            Jelly12.destroy();
            score = score +2;
        }
       if (laddooGroup.isTouching(Jelly13)){
            Jelly13.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly14)){
            Jelly14.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly15)){
            Jelly15.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly16)){
            Jelly16.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly17)){
            Jelly17.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly18)){
            Jelly18.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly19)){
            Jelly19.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly20)){
            Jelly20.destroy();
            score = score +2;
        }
        if (laddooGroup.isTouching(Jelly21)){
            Jelly21.destroy();
            score = score +2;
        }

        if (witch.isTouching(bheam)) {
            gameState = END;
        }

        var rand = (Math.round(random(0, 1)));

        if (laddooGroup.isTouching(witch)) {
            if (frameCount % 10 === 0) {
                witch.destroy();
                witch = createSprite(Math.round(random(20, 580)),Math.round(random(-400, 0)));
                witch.addImage(witchImg);
                witch.scale = 0.8;
                witch.velocityY = 10;
                score = score + 4;
            }

        }
        if (witch.y > 400) {
            witch.x = Math.round(random(20, 390));
            witch.y = 0;
        }
        
    }

    else if (gameState === END) {

        witch.destroy();
        laddooGroup.setVelocityXEach(0);
        bheam.visible = false;
        gameOver.visible = true;
        restart.visible = true;

        if (mousePressedOver(restart)) {
            reset();
        }
    }
    

    

    drawSprites();
    fill("white");
    textSize(30);
    text("Score: " + score, 460, 40);
}

function createBullet(x) {
    var bullet = createSprite(100, 100, 5, 10);
    bullet.addImage(laddoImage);
    bullet.y = 360;
    bullet.scale = 0.2;
    bullet.x = x;
    bullet.velocityY = -1;
    bullet.lifetime = 1000;
    laddooGroup.add(bullet);
}
function reset() {
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    laddooGroup.destroyEach();
    bheam.visible = true;
    witch = createSprite(200, 0);
    witch.addImage(witchImg);
    witch.scale = 0.8;
    witch.velocityY = 1;
    score = 0;

    Jelly1 = createSprite(35,30,10,10);
    Jelly1.addImage(Jelly1Img);
    Jelly1.scale = 0.16;

    Jelly2 = createSprite(110,30,10,10);
    Jelly2.addImage(Jelly2Img);
    Jelly2.scale = 0.16;

    Jelly3 = createSprite(185,30,10,10);
    Jelly3.addImage(Jelly3Img);
    Jelly3.scale = 0.16;

    Jelly4 = createSprite(260,30,10,10);
    Jelly4.addImage(Jelly4Img);
    Jelly4.scale = 0.16;

    Jelly5 = createSprite(340,30,10,10);
    Jelly5.addImage(Jelly5Img);
    Jelly5.scale = 0.16;

    Jelly6 = createSprite(420,30,10,10);
    Jelly6.addImage(Jelly6Img);
    Jelly6.scale = 0.16;

    Jelly8 = createSprite(35,90,10,10);
    Jelly8.addImage(Jelly1Img);
    Jelly8.scale = 0.16;

    Jelly9 = createSprite(110,90,10,10);
    Jelly9.addImage(Jelly4Img);
    Jelly9.scale = 0.16;

    Jelly10 = createSprite(185,90,10,10);
    Jelly10.addImage(Jelly6Img);
    Jelly10.scale = 0.16;

    Jelly11 = createSprite(260,90,10,10);
    Jelly11.addImage(Jelly5Img);
    Jelly11.scale = 0.16;

    Jelly12 = createSprite(340,90,10,10);
    Jelly12.addImage(Jelly2Img);
    Jelly12.scale = 0.16;

    Jelly13 = createSprite(420,90,10,10);
    Jelly13.addImage(Jelly3Img);
    Jelly13.scale = 0.16;

    Jelly14 = createSprite(500,90,10,10);
    Jelly14.addImage(Jelly5Img);
    Jelly14.scale = 0.16;

    Jelly15 = createSprite(35,150,10,10);
    Jelly15.addImage(Jelly4Img);
    Jelly15.scale = 0.16;
          
    Jelly16 = createSprite(110,150,10,10);
    Jelly16.addImage(Jelly6Img);
    Jelly16.scale = 0.16;
          
    Jelly17 = createSprite(185,150,10,10);
    Jelly17.addImage(Jelly1Img);
    Jelly17.scale = 0.16;
          
    Jelly18 = createSprite(260,150,10,10);
    Jelly18.addImage(Jelly2Img);
    Jelly18.scale = 0.16;
          
    Jelly19 = createSprite(340,150,10,10);
    Jelly19.addImage(Jelly5Img);
    Jelly19.scale = 0.16;
          
    Jelly20 = createSprite(420,150,10,10);
    Jelly20.addImage(Jelly4Img);
    Jelly20.scale = 0.16;
          
    Jelly21 = createSprite(500,150,10,10);
    Jelly21.addImage(Jelly6Img);
    Jelly21.scale = 0.16;
    


    

}




