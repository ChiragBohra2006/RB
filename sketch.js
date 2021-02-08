var robot, r1;
var music;

function preload(){
   
    r1= loadAnimation("frame_04_delay-0.03s-removebg-preview.png", 
    "frame_08_delay-0.03s-removebg-preview.png", 
    "frame_12_delay-0.03s-removebg-preview.png")


    music = loadSound("Undertale Asriel Dreemurr Theme.mp3");
}


function setup(){
    canvas = createCanvas(1366, 657);
robot = createSprite(200, 200);
robot.addAnimation("r", r1);
robot.scale = 0.5;



}

function draw() {
    background(rgb(169,169,169));

    robot.velocityX = 0;
    if(keyDown("right"))
    {
        robot.velocityX = 2;
    }
    
   if(robot.x === 250)
   {
    music.play();
   }
drawSprites();


 
}


function music()
{
    if(frameCount%100 === 0)


    {
        music.play();
    }
}