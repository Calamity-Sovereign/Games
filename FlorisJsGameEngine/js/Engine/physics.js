import Component from "./component.js"
import Renderer from "./renderer.js"




class Physics extends Component{
    constructor(velocity = { x:0, y:0}, accleration = {x:0, y:0},
    gravity = { x:0, y:0}){
        super();
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.gravity = gravity;
    }
////there is ("theoryically") a function for deltaTime in your game file but you might not have it.{cause u a slow typer}
    update(deltaTime){
        this.velocity.x += (this.acceleration.y + this.gravity.y)
        //why is deltatime multiblied twice @_@ (I dont know?)
        this.GamneObject.x += this.velocity.x * deltaTime;
        this.GamneObject.y += this.velocity.y * deltaTime;
    }
    /////// this is a basic collider left right top bottom , if touch collide (boom easy) 
isColliding(otherPhysics){
    const[left,right,top,bottom] = this.getBoundingBox();
    const[otherleft,otherright,othertop,otherbottom] = otherPhysics.getBoundingBox();

    return left<otherRight&&right>otherLeft&&top<otherBottom&&bottom>othertop;

}

getBoundingBox(){
    const renderer = this.gameObject.getComponent(Renderer);
    const left = this.gameObject.x;
    const right = this.gameObject.x + renderer.width;
    const top = this.gameObjecty.y;
    const bottom = this.gameObject.y + renderer.height;
}

}
