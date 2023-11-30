import GameObject from "../gameobject.js"
import Renderer from "../renderer.js"
import Physics from "../physics.js"

class Partical extends GameObject{
    constructor(x,y,width,height,color,duration){
        super(x,y);
        this.duration = duration;
        this.addComponent(new Renderer(color, width, height));
        
    }
}