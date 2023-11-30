import GameObject from "./gameobject.js"
import Particle from "./particle.js"
import Physics from "./physics.js"

class ParticleSystem extends GameObject {
    constructor (x,y,color, lifeDuration, emitDuration)
    {
        super(x,y);
        this.color = color;
        this.count = count;
        this.lifeDuration = lifeDuration;
        this.emitDuration = emitDuration;
        this.particlesEmitted = 0;
    }
    update (deltaTime){
        if(this.emitDuration>0){
            this.emitParticles(deltaTime);
            this.emitDuration -= deltaTime;
        } else if (this.emitDuration <= 0){
            this.game.removeGameObject(this);
        }
        super.update(deltaTime);
    }


}
