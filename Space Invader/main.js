const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2D");

class Player{
constructor(x,y,width, height){
    this.x =x;
    this.y =y;
    this.height = height;
    this.width = width;
    this.speed = 5;
}

draw(){
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

moveLeft(){
    this.x -=this.speed;
    if(this.x<0){
        this.x=0;
    }

}
moveRight(){
    this.x += this.speed;
    if(this.x + this.width > canvas.width){
        this.x = canvas.width - this.width;
         }
    }
    fire(){
        const bullet = new Bullet(this.x + this.width/2-2-5, this.height/3,3,4,speed);
        bullets.push(bullets);

    }
}
class Bullet{
    constructor(x,y,width, height,speed){
        this.x =x;
        this.y =y;
        this.height = height;
        this.width = width;
        this.speed = speed;

    }
    draw(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.y -= this.speed;
    }
}

class Alien{


}

const alienRows = 4;
const alienColumns = 10;
const alienwidth = 40;
const alienHeight = 30;
const alienPadding = 10;
let alienDirection = 1;
let alienMoveDown = false;

const player = new Player(canvas.width/2 -25, canvas.height - 50,50)
let bullet = [];

function createAliens(){
let alienArray = [];
for(let row = 0; row<alienRows; row++){
    //for(let col);
}

}

const KeyStates = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,

}

function update(){
    if(keyStates.ArrowLeft){
        player.moveLeft();
     }
     if(keyStates.ArrowRight){
        player.moveRight();
     }
     if(keyStates.Space){
        player.fire();
        keyStates.Space = false; 
     }
     bullets.forEach((bullet, index) =>{
        bullet.update();
        if(bullet.y <0){
            bullets.splice(index,1);
        }
    });
    
    let moveDownThisFrame = false; 
    if(alienMoveDown){
        moveDownThisFrame = true; 
        alienMoveDown = false; 
    }
    
    aliens.forEach((alien) =>{
        if(moveDownThisFrame){
            alien.y += 20;
        } else {
            alien.x += 2*alienDirection;
        }
    });
//this loops the alien bullet collision
bullets.forEach((bullet, bulletIndex)=>{
    bullet.update();
    aliens.forEach((alien,alienIndex)=>{
        if(
            alien&&
            bullet.x<alien.x+alien.width&&
            bullet.x + bullet.width> alien.x &&
            bullet.y< alien.y + alien.height &&
            bullet.y + bullet.height> alien.y
        ){
            bullets.splice(bulletIndex, 1);
            aliens.splice(alienIndex,1);
        }
    });

if(bullets.y<0){
        bullets.splice(bulletIndex, 1);
    }

});

}


function draw(){


}


function gameLoop(){
    if(isGameOver()){
        alert("GameOver");
        return;

    }
    update();
    draw();

    requestAnimationFrame(gameLoop);
    
}

function isGameOver(){
    return alien.some((alien)=> alien.y )
}
function handleKeyDown(a){
if(e.code in KeyState){
    
}

}

gameLoop();
